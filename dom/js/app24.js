// Event propagation - bubbling, capturing

/* Bubbling :
When an event happens on an element, it first runs the event listeners on it, then on its parent, then all the way up on other ancestors. 

Capturing : 
The addEventListener() takes capture as third argument.
When an event happens on an element, it first runs the event listeners on the top most parent element, then on its child element, then all the way up to the target element.
There are two possible values for the capture argument :
If it’s false (default), then the event listener is set on the bubbling phase. 
If it’s true, then the event listener is set on the capturing phase. 
*/

const div = document.querySelector('div');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const span = document.querySelector('span');

// Bubbling

span.addEventListener('click', function () {
  console.log('span');
});
document.addEventListener('click', function () {
  console.log('document');
});
p.addEventListener('click', function () {
  console.log('p');
});
h1.addEventListener('click', function () {
  console.log('h1');
});
window.addEventListener('click', function () {
  console.log('window');
});
div.addEventListener('click', function () {
  console.log('div');
});
document.body.addEventListener('click', function () {
  console.log('body');
});
document.documentElement.addEventListener('click', function () {
  console.log('html');
});

// Capturing

// span.addEventListener(
//   'click',
//   function () {
//     console.log('span');
//   },
//   { capture: true }
// );
// document.addEventListener(
//   'click',
//   function () {
//     console.log('document');
//   },
//   { capture: true }
// );
// p.addEventListener(
//   'click',
//   function () {
//     console.log('p');
//   },
//   { capture: true }
// );
// h1.addEventListener(
//   'click',
//   function () {
//     console.log('h1');
//   },
//   { capture: true }
// );
// window.addEventListener(
//   'click',
//   function () {
//     console.log('window');
//   },
//   { capture: true }
// );
// div.addEventListener(
//   'click',
//   function () {
//     console.log('div');
//   },
//   { capture: true }
// );
// document.body.addEventListener(
//   'click',
//   function () {
//     console.log('body');
//   },
//   { capture: true }
// );
// document.documentElement.addEventListener(
//   'click',
//   function () {
//     console.log('html');
//   },
//   { capture: true }
// );
