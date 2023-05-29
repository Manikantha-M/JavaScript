// var let const
// var
var number;
var number = 100;
var number;
var number;
var number = 50;
number = 25;
console.log(number);

// const
/*
The const declaration should always be initialized with a value.
The value of a constant can't be changed through reassignment, and it can't be redeclared. However, if a constant is an object or array its properties or items can be updated or removed.
*/
const person = {name:'john'};
person.name = 'mani';
console.log(person.name);