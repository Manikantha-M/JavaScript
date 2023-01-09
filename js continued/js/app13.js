// forEach()
/* forEach() is used to iterate over array items.  */
/* The forEach() executes a provided callback function once for each array element. Reference the array item as callback function argument. */
/* We can even define an anonymous callback function inside forEach(). */
/* forEach() does not return a new array. */

const people = [
  { nam: 'bob', age: 20, pos: 'dev' },
  { nam: 'peter', age: 25, pos: 'designer' },
  { nam: 'susy', age: 30, pos: 'boss' },
];

// function showPerson(person) {
//   console.log(person.pos.toUpperCase());
// }
// people.forEach(showPerson);

// or

people.forEach(function (item) {
  console.log(item.pos);
});
