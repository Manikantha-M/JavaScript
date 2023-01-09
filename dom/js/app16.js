// remove(), removeChild()
/* The remove() removes the specified element from the DOM. */
/* The removeChild() removes a specified child node of the specified element. Returns the removed node as a Node object, or null if the node does not exist. */

const result = document.querySelector('#result');
result.remove();
console.log(document.body);

const parent = document.querySelector('.second');
const remItem = parent.querySelector('#rem');
console.log(remItem);
const remNode = parent.removeChild(remItem);
console.log(remNode);
