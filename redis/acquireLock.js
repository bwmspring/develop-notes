const redis = require("redis");
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
  retry_strategy: () => 1000
});

function acquireLock(lockKey, timeout) {
  const identifier = Math.random().toString(36).substr(2, 10);
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tryAcquireLock = () => {
      redisClient.set(lockKey, identifier, "PX", timeout, "NX", (err, result) => {
        if (err) {
          reject(err);
        } else if (result === "OK") {
          resolve(identifier);
        } else {
          const elapsedTime = Date.now() - start;
          if (elapsedTime >= timeout) {
            resolve(null);
          } else {
            setTimeout(tryAcquireLock, 10);
          }
        }
      });
    };
    tryAcquireLock();
  });
}

function releaseLock(lockKey, identifier) {
  redisClient.get(lockKey, (err, result) => {
    if (err) throw err;
    if (result === identifier) {
      redisClient.del(lockKey);
    }
  });
}

// 用法示例
acquireLock("order_123", 10000)
  .then(identifier => {
    if (identifier) {
      // 处理订单
      releaseLock("order_123", identifier);
    } else {
      // 无法获取锁
    }
  })
  .catch(err => console.error(err));


// 该实现使用 redisClient.set 命令尝试获取锁，设置了锁的超时时间，使用了 NX 参数避免并发问题。
// 如果获取锁失败，会通过循环等待的方式尝试再次获取锁，直到超时时间到达为止。
// 获取到锁后进行业务操作，完成后需要释放锁，否则其他线程无法获取锁，造成死锁。
