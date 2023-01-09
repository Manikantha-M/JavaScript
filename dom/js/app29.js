// local storage example -- JSON.stringify(), JSON.parse()
/* localStorage object can only store strings.
If you want to store objects or arrays as values in localStorage, you can use JSON.stringify() to convert them into strings, then we will be able to store objects or arrays in localStorage.
Now, To read and return stringified values, use the JSON.parse()
The JSON.parse() takes JSON strings and converts them back into their original data type.
Being able to convert arrays and objects into strings using JSON.stringify() and convert them back using JSON.parse() is very useful. */

const val1 = [123, 'abc', 'Mani'];
console.log(val1);
const val2 = JSON.stringify(val1);
console.log(val2);
const val3 = JSON.parse(val2);
console.log(val3);

const friends = ['john', 'peter', 'bob'];
localStorage.setItem('friends', JSON.stringify(friends));
const res = localStorage.getItem('friends');
console.log(res);
console.log(typeof res);
const result = JSON.parse(localStorage.getItem('friends'));
console.log(result);

let newArr;
if (localStorage.getItem('newArr')) {
  newArr = JSON.parse(localStorage.getItem('newArr'));
} else {
  newArr = [];
}
newArr.push('apple');
console.log(newArr);
localStorage.setItem('newArr', JSON.stringify(newArr));

// Each time you hit refresh an apple will be added to the array and the value for the key 'newArr' will be updated.
