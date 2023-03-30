// this keyword Advanced

console.log(this);
// Here this refers to the Window object.

function showThis(){
  console.log(this);
}

showThis();
// Here also this refers to the Window object.

const person = {
  name : 'john',
  showThis:showThis
}

person.showThis();
// Here this refers to the person object.

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', showThis);
// Here this refers to the btn1 element.

btn2.addEventListener('click', function(){
  showThis();
});
// Here this refers to the Window object.