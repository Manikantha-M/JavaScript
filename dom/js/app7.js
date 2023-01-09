// Navigate the DOM - parentElement property
/* parentElement property returns the parent element. */

const heading = document.querySelector('h2');
console.log(heading);
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement);
const a = heading.parentElement;
a.style.backgroundColor = 'green';
