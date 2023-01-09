// currentTarget vs target
/* The target event property returns the element that triggered the event.
The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.
*/

const btns = document.querySelectorAll('.btn');
console.log(btns);
console.log(btns[0]);

btns.forEach(function (item) {
  item.addEventListener('click', function (ceo) {
    console.log(ceo.currentTarget);
    console.log(ceo.target);
    ceo.target.classList.add('blue');
  });
});
