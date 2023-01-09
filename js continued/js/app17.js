// reduce()
/* reduce() is used to iterate over array items. */
/* reduce() takes two arguments :
1. callback function 
    callback function contains two arguments -- accumalator and current array element.
2. initial value
    initial value for accumalator.  */
/* The reduce() calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. */
/* The reduce() reduces the array to a single value. */

const people = [
  { nam: 'bob', age: 20, pos: 'dev', id: 1, sal: 200 },
  { nam: 'peter', age: 25, pos: 'designer', id: 2, sal: 300 },
  { nam: 'susy', age: 30, pos: 'boss', id: 3, sal: 500 },
  { nam: 'anna', age: 34, pos: 'boss', id: 4, sal: 500 },
];

const result = people.reduce(function (accumalator, currItem) {
  console.log(accumalator);
  console.log(currItem);
  return accumalator;
}, 0);
console.log(result);

const total = people.reduce(function (acc, currItem) {
  acc += currItem.sal;
  return acc;
}, 0);
console.log(total);

const num = [1, -1, 2, 3];
const res = num.reduce(function (acc, currItem) {
  return acc + currItem;
}, 0);
console.log(res);
