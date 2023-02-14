// “函数节流的代码实现”
var throttle = function (fn, interval) {
    var __self = fn, // 保存需要被延时的函数引用
    timer, // 定时器
    firstTime = true; // 是否第一次调用
    console.log('firstTime: ', firstTime);
    return function () {
        var args = arguments, __me = this;
        if (firstTime) { // 第一次调用 不需要延迟执行
            __self.apply(__me, args);
            return firstTime = false;
        }
        if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            __self.apply(__me, args);
        }, interval || 500);
    };
};
// window.onresize = throttle(function(){
//   console.log(1);
// },500)
var t = throttle(function () {
    console.log("hello,world!");
}, 3000);
t();
