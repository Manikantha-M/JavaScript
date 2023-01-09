// getElementsByTagName(tag)
/* The getElementsByTagName() returns a collection of all elements in the document with the specified tag name, as an HTMLCollection object(an array-like list of HTML elements). */
/* We can use index and length property on HTMLCollection object, We cannot use array methods directly on HTMLCollection object. */

const headings = document.getElementsByTagName('h2');
console.log(headings);
headings[0].style.color = 'red';
console.log(headings.length);

const listItems = document.getElementsByTagName('li');
console.log(listItems);
listItems[2].style.color = 'orange';

const betterListItems = [...listItems];
console.log(betterListItems);
betterListItems.forEach(function (item) {
  console.log(item);
});
