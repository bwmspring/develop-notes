// 这个问题可以使用观察者模式来解决。当用户执行一些行为时，我们可以通知一组观察者，让它们对该事件做出反应。在本例中，每个观察者都代表一种赠送积分的规则。当用户购买产品或分享内容时，观察者将根据相应的规则赠送积分。

// 下面是一个TypeScript示例代码，演示如何使用观察者模式实现这个功能：

// 定义观察者接口
interface Observer {
  update(action: string): void;
}

// 定义用户类
class User {
  private observers: Observer[] = [];

  // 注册观察者
  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  // 移除观察者
  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // 用户购买产品
  public buyProduct(): void {
    // 执行购买逻辑
    // ...

    // 通知观察者，赠送积分
    this.notifyObservers("buyProduct");
  }

  // 用户分享内容
  public shareContent(): void {
    // 执行分享逻辑
    // ...

    // 通知观察者，赠送积分
    this.notifyObservers("shareContent");
  }

  // 通知观察者
  private notifyObservers(action: string): void {
    for (const observer of this.observers) {
      observer.update(action);
    }
  }
}

// 定义积分规则观察者
class PointsObserver implements Observer {
  private points: number;

  constructor(points: number) {
    this.points = points;
  }

  // 根据行为赠送积分
  public update(action: string): void {
    switch (action) {
      case "buyProduct":
        this.givePoints(10);
        break;
      case "shareContent":
        this.givePoints(5);
        break;
    }
  }

  // 赠送积分
  private givePoints(amount: number): void {
    this.points += amount;
    console.log(`赠送 ${amount} 积分，当前积分为 ${this.points}`);
  }
}

// 创建用户
const user = new User();

// 创建积分规则观察者
const pointsObserver = new PointsObserver(0);

// 将积分规则观察者注册到用户
user.attach(pointsObserver);

// 用户购买产品
user.buyProduct();

// 用户分享内容
user.shareContent();


// 在上面的示例中，`User` 类代表用户，实现了观察者模式中的被观察者接口。
// `PointsObserver` 类代表积分规则观察者，实现了观察者接口。
// 当用户执行购买产品或分享内容的操作时，`User` 类会通知 `PointsObserver` 观察者，让它根据相应的规则