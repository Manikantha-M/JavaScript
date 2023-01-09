// insertBefore(element, location)
/* The insertBefore(element, location) inserts a node as a child, right before an existing child, which you specify. */

const result = document.querySelector('#result');

const bodyDiv = document.createElement('div');
console.log(bodyDiv);

const text = document.createTextNode('I am a new div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement('h2');
const text2 = document.createTextNode('I am a new heading');
heading.appendChild(text2);
heading.classList.add('blue');
console.log(heading);
const resItem = document.querySelector('.red');
result.insertBefore(heading, resItem);
