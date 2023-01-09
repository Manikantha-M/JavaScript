// Events, addEventListener()
/* Events are actions that occur when either the user or the browser itself manipulates the page. 
Some common events that occur with websites, are page loads, button clicks, key presses, hovers, form submissions, window resizing etc. */
/* Adding an event listener is a way to handle events in JavaScript. */
/* The addEventListener() allows you to add event listeners on 
1). Any DOM object such as HTML elements or the document object itself.
2). window object.
3). other objects that support events, like the xmlHttpRequest object.
addEventListener() takes event and callback function as arguments.
*/

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
  heading.classList.add('red');
});
