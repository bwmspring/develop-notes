// timeChunk 函数让创建节点的工作分批进行
// 比如把1秒钟创建1000个节点，改为每隔200毫秒创建8个节点
// 第1个参数是创建节点时需要用到的数据
// 第2个参数是封装了创建节点逻辑的函数
// 第3个参数表示每一批创建的节点数量
let timeChunk = function (ary, fn, count) {
    var t;
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift();
            fn(obj);
        }
    };
    return function () {
        t = setInterval(function () {
            if (ary.length === 0) { // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        }, 200);
    };
};
var ary = [];
for (var i = 0; i <= 20; i++) {
    ary.push(i);
}
var renderList = timeChunk(ary, function (n) {
  console.log('n: ', n);
    // var div = document.createElement('div');
    // div.innerHTML = n;
    // document.body.appendChild(div);
}, 4);
renderList();
