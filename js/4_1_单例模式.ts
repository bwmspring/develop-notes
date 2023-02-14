// 用代理实现单例模式

const CreateDiv = function (html) {
  this.html = html;
  this.init();
}

CreateDiv.prototype.init = function () {
  console.log('do something ...');
}

let ProxySingletonCreateDiv = (function () {
  let instance;
  return function (html) {
    if (!instance) {
      instance = new CreateDiv(html)
    }
    return instance;
  }
})();

let a = new ProxySingletonCreateDiv("11")
