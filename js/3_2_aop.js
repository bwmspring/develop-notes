Function.prototype.before = function (beforeFn) {
  let __self = this;// 保存原函数的引用
  return function () {
    // 执行新函数，修正this
    beforeFn.apply(this, arguments);
    // 执行原函数
    return __self.apply(this, arguments);
  }
}

Function.prototype.after = function (afterFn) {
  let __self = this;
  return function () {
    let ret = __self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  }
}

let func = function () {
  console.log(2);
}

func = func.before(function () {
  console.log(11111);
}).after(function () {
  console.log(33333);
})

func();