// Event objects
/* When an event occurs, the event belongs to a certain event object, like a mouse click event belongs to the MouseEvent object. */
/* The callback function in addEventListener() takes corresponding event object as its argument.
Let's call the corresponding event object as 'ceo'. 
ceo.currentTarget -- returns the element on which the addEventListener() is applied. 
ceo.type -- returns the event type. 
ceo.preventDefault() is used to prevent default behavior of an event, like when you click an anchor element scrolling up to top happens which can be prevented. */

const heading = document.querySelector('h2');
const txt = document.querySelector('#name');
const link = document.getElementById('link');

heading.addEventListener('click', function (ceo) {
  console.log(ceo);
  console.log(ceo.currentTarget);
  console.log(ceo.type);
});

txt.addEventListener('keyup', function (ceo) {
  console.log(ceo);
  console.log(ceo.currentTarget);
  console.log(ceo.type);
});

link.addEventListener('click', function (ceo) {
  ceo.preventDefault();
});
