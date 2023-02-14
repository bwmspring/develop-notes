let obj = {
  a: 1,
  getA: function () {
    console.log(this === obj);
    console.log(this.a);
  }
}

obj.getA()