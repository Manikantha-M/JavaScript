// createElement(), createTextNode(), appendChild()
/* The createElement() creates an Element Node with the specified name. 
The createTextNode() creates a text string from the specified value. 
The appendChild() appends a node as the last child of a node.*/

const result = document.querySelector('#result');

// create an empty div
const bodyDiv = document.createElement('div');
console.log(bodyDiv);
// create a text node
const text = document.createTextNode('I am a new div');

bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const text2 = document.createTextNode('I am a new heading');
heading.appendChild(text2);
heading.classList.add('blue');
console.log(heading);
result.appendChild(heading);
