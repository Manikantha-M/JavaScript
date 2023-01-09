// innerText, prepend()
/* The innerText property sets or returns the text content of the specified node, and all its descendants. 
If you set the innerText property, any child nodes are removed and replaced by a single text node containing the specified string. */
/* The prepend() inserts a set of Node objects before the first child of an element. */

const newHeading = document.createElement('h1');
newHeading.innerText = 'Manikantha';
console.log(newHeading);

document.body.prepend(newHeading);
console.log(document.body);
