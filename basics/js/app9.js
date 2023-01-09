// Functions
/* Function reduces the redundancy of the code. Function can be declared once and used multiple times. */
/* The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. */
/* In JavaScript, function is also a variable. */

function fun() {
  console.log('hi');
  console.log('hello');
}
fun();

function greet(name) {
  console.log('hello there ' + name);
}
greet('mani');

function add(x, y) {
  console.log(x + y);
}
add(5, 3);

function calc(value) {
  return value * 2.54;
}
const width = calc(50);
console.log(width);

// function expression
const mul = function (x, y) {
  return x * y;
};
console.log(mul(2, 5));

const arr = ['mani', 'hello', mul(5, 3)];
console.log(arr);
