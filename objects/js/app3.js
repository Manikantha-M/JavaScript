// this keyword Advanced

console.log(this);
// Here this referes to the Window object.

function showThis(){
  console.log(this);
}

showThis();
// Here also this referes to the Window object.

const person = {
  name : 'john',
  showThis:showThis
}

person.showThis();
// Here this referes to the person object.

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', showThis);
// Here this referes to the btn1 element.

btn2.addEventListener('click', function(){
  showThis();
});
// Here this referes to the Window object.