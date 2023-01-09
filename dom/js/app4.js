// getElementsByClassName(class)
/* The getElementsByClassName() returns a collection of all elements in the document with the specified class name, as an HTMLCollection object(an array-like list of HTML elements).
We can use index and length property on HTMLCollection object, We cannot use array methods directly on HTMLCollection object.*/

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'orange';
