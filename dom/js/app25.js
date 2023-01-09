// stopPropagation()
/* The stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases. */

const p = document.querySelector('p');
const h1 = document.querySelector('h1');
const div = document.querySelector('div');

p.addEventListener('click', function () {
  console.log('p');
});
h1.addEventListener('click', function (ceo) {
  ceo.stopPropagation();
  console.log('h1');
});
div.addEventListener('click', function () {
  console.log('div');
});
