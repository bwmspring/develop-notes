(function () {
  Array.prototype.push.call(arguments, 3)
  console.log('arguments: ', arguments);
})(1, 2);

(function () {
  Array.prototype.push.apply(arguments, [3, 4, 5])
  console.log('arguments: ', arguments);
})(1, 2);