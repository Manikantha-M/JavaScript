// filter()
/* filter() is used to iterate over array items. */
/* The filter() executes a provided callback function once for each array element. Reference the array item as callback function argument. */
/* We can even define an anonymous callback function inside filter(). */
/* filter() returns the elements of the array that meet the condition specified in the callback function in a new array. */

const people = [
  { nam: 'bob', age: 20, pos: 'dev' },
  { nam: 'peter', age: 25, pos: 'designer' },
  { nam: 'susy', age: 30, pos: 'boss' },
  { nam: 'anna', age: 34, pos: 'boss' },
];

const youngPeople = people.filter(function (item) {
  return item.age <= 25;
});
console.log(youngPeople);

const developer = people.filter(function (item) {
  return item.pos === 'dev';
});
console.log(developer);
