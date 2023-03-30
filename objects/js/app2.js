// this keyword Basics
/*
The JavaScript this keyword refers to the object it belongs to.
*/

const person = {
  name: 'John',
  age: 25,
  tellName() {
    console.log(this);
    console.log(`My name is ${this.name}`);
  },
};

person.tellName();
