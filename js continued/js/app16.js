// find()
/* find() is used to iterate over array items. */
/* The find() executes a provided callback function once for each array element. Reference the array item as callback function argument. */
/* We can even define an anonymous callback function inside find(). */
/* find() returns the element of the array that is the first one to meet the condition specified in the callback function. If the condition is not met by all the elements of the array, then find() returns undefined. */

const people = [
  { nam: 'bob', age: 20, pos: 'dev', id: 1 },
  { nam: 'peter', age: 25, pos: 'designer', id: 3 },
  { nam: 'susy', age: 30, pos: 'boss', id: 3 },
  { nam: 'anna', age: 34, pos: 'boss', id: 4 },
];

const person = people.find(function (item) {
  return item.id === 3;
});
console.log(person);

const names = ['one', 'two', 'three'];
const nam = names.find(function (item) {
  return item === 'two';
});
console.log(nam);
