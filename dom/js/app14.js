// replaceChild(newchild, oldchild)
/* The replaceChild() replaces a child node with a new node. 
The new node could be an existing node in the document, or you can create a new node. */

const result = document.getElementById('result');
const oldHeading = document.querySelector('.mid');
const newHeading = document.createElement('h1');
const text = document.createTextNode('New Heading');
newHeading.appendChild(text);
result.replaceChild(newHeading, oldHeading);
console.log(result);
