// this keyword
/*
The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the window object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/

const john = {
  name: 'John',
  age: 25,
  fullName() {
    console.log(`My name is ${this.name}`);
  },
};
const anna = {
  name: 'Anna',
  age: 25,
  fullName() {
    console.log(`My name is ${this.name}`);
  },
};

john.fullName();
anna.fullName();
