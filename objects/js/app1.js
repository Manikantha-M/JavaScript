// Objects Basics
/* Objects are collections of key (property) - value pairs.
The value can be string, number, boolean, array, function. 
*/

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'susy'],
  sayHello(name) {
    console.log(`Hello I am ${name}`);
  },
};
console.log(person);
console.log(person.name);
person.age = 60;
person.sayHello('Mani');
// delete a key
// delete person.siblings;
console.log(delete person.siblings);
