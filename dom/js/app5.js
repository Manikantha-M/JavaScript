// querySelector(), querySelectorAll()
/* The querySelector() only returns the first element that matches the specified selector(s). To return all the matches, use the querySelectorAll() instead. 
querySelectorAll() returns a static NodeList object(an array-like list of HTML elements). NodeList object is a collection of nodes. 
We can use index and length property on NodeList object, Although NodeList object is not an Array, it is possible to iterate over it with forEach(). */
/* We can specify multiple css selectors in both querySelector() and querySelectorAll(). */

const result = document.querySelector('#result');
result.style.color = 'green';
result.style.backgroundColor = 'silver';

const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const items = document.querySelectorAll('.special');
console.log(items);

items.forEach(function (item) {
  console.log(item);
  item.style.color = 'blue';
});
