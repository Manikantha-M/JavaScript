// Navigate the DOM - nextElementSibling, previousElementSibling
/* nextElementSibling property returns the first following sibling, and null otherwise. 
previousElementSibling property returns the first preceding sibling, and null otherwise.*/

const start = document.querySelector('.first');
console.log(start);
const nxt = start.nextElementSibling;
console.log(nxt);
nxt.style.color = 'red';

const end = document.querySelector('#last');
console.log(end);
const prev = end.previousElementSibling;
console.log(prev);
prev.style.color = 'green';
