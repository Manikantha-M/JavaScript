// map()
/* map() is used to iterate over array items. */
/* The map() executes a provided callback function once for each array element. Reference the array item as callback function argument. */
/* We can even define an anonymous callback function inside map(). */
/* map() returns a new array. The length of the returned array is same as the original array.*/

const people = [
  { nam: 'bob', age: 20, pos: 'dev' },
  { nam: 'peter', age: 25, pos: 'designer' },
  { nam: 'susy', age: 30, pos: 'boss' },
];
const ages = people.map(function (item) {
  return item.age;
});
console.log(ages);

const newPeople = people.map(function (item) {
  return {
    nam: item.nam.toUpperCase(),
    age: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map(function (item) {
  return `<h1>${item.nam}</h1>`;
});
console.log(names);
document.body.innerHTML = names.join('');
