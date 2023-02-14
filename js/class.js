// class Person {
//   name: string;
//   instantiatedAt = new Date();
//   constructor(name: string) {
//     this.name = name;
//   }
// }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.instantiatedAt = new Date();
    }
    return Person;
}());
var p = new Person('hi');
console.log('p: ', p);
