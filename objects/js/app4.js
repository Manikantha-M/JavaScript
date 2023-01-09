// this keyword - advanced
/* 
It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the window object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/
/* In a regular function(not arrow) 'this' is determined by HOW a function is invoked (left of .) */

console.log(this);

function showThis() {
  console.log(this);
}
showThis();

const john = {
  name: 'john',
  showThis: showThis,
};
const bob = {
  name: 'bob',
  showThis: showThis,
};
john.showThis();
bob.showThis();

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);

// if you use anonymous call back function 'this' refers to window object.
btn1.addEventListener('click', function () {
  showThis();
});
