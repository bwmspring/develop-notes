// class Person {
//   name: string;
//   instantiatedAt = new Date();

//   constructor(name: string) {
//     this.name = name;
//   }
// }

class Person {
  name: string;
  instantiatedAt: Date;

  constructor(name: string) {
    this.name = name;
    this.instantiatedAt = new Date();
  }
}

const p = new Person('hi');
console.log('p: ', p);