// Coffee and Tea
class Beverage {
  constructor() { }
  boilWater() {
    console.log("把水煮沸");
  }
  // 空方法，由子类重写
  brew() { 
    throw new Error("必须实现此方法")
  }
  pourInCup() { }
  addCondiments() { }
  init() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}




// 创建 Coffee 子类
// class Coffee {
//   constructor() { }
// }
// Coffee.prototype = new Beverage()

// Coffee.prototype.brew = function() {
//   console.log('用沸水冲泡咖啡');
// }
// Coffee.prototype.pourInCup = function() {
//   console.log('把咖啡倒进杯子里');
// }
// Coffee.prototype.addCondiments = function() {
//   console.log('加糖和牛奶');
// }
// let coffee = new Coffee();
// coffee.init()

class Coffee extends Beverage {
  constructor() {
    super();
  }
  brew() {
    console.log('用沸水冲泡咖啡');
  }
  pourInCup() {
    console.log('把咖啡倒进杯子里');
  }
  addCondiments() {
    console.log('加糖和牛奶');
  }

}
let coffee = new Coffee();
coffee.init()