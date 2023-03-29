// Object Basics
/* Object is a collection of key - value pairs.
The value can be a string, number, boolean, array, object, method. 
*/

const age = 35;
const person = {
  name: 'john',
  age,
  married: true,
  siblings: ['anna', 'susy'],
  greet : function(){
    return 'Hi'
  },
  sayHello() {
    return `Hello I am ${person.name}`;
  },
  'random-value':2323
};
console.log(person["random-value"]);
console.log(person.greet());
console.log(person.sayHello());
const isDeleted = delete person.married;
// Delete operation returns true or false.
console.log(person, isDeleted)