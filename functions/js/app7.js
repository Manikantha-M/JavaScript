/*
Arrow Function Basics
*/

const sayHi = () => console.log('Hi');
sayHi();

const double = value => value * 2;
console.log(double(5));

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2,3));

const a = (x,y) => `${x*y}`;
console.log(a(3,9));

const obj = () => ({name:'john', age:25});
console.log(obj());

const numbers = [1,2,3,4,5,6];
const gtTwo = numbers.filter(number => number > 2);
console.log(gtTwo)

const fun = numbers.filter((num, index) => {
   console.log(index+num);
   return num > 2;
});
console.log(fun);

const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=> console.log('you clicked me'));