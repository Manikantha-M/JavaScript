/* 
Arrow Functions
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage.

syntax:

() => expression         --> implicit return

param => expression      --> implicit return

(param) => expression    --> implicit return

(param1, paramN) => expression   --> implicit return

() => {
  statements             --> explicit return required
}

param => {
  statements             --> explicit return required
}

(param1, paramN) => {
  statements             --> explicit return required
}


Rest parameters, default parameters, and destructuring within params are supported, and always require parentheses:

(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression

Arrow functions can be async by prefixing the expression with the async keyword.

Syntax to return objects implicitly without an expression:
const func = () => ({ foo: 1 });

Arrow function expressions should only be used for non-method functions because they do not have their own this.

A class's body has a this context, arrow functions as class fields close over the class's this context, and the this inside the arrow function's body will correctly point to the instance (or the class itself, for static fields).

The call(), apply(), and bind() methods are not useful when called on arrow functions, because arrow functions establish this based on the scope the arrow function is defined within, and the this value does not change based on how the function is invoked.

Arrow functions do not have their own arguments object. Thus, arguments is a reference to the arguments of the enclosing scope.
Example:
const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); // 1

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6

In most cases, using rest parameters is a good alternative to using an arguments object.
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}
foo(1); // 11

Arrow functions cannot be used as constructors and will throw an error when called with new. They also do not have a prototype property.

The yield keyword cannot be used in an arrow function's body (except when used within generator functions further nested within the arrow function). As a consequence, arrow functions cannot be used as generators.
*/


const anna = {
  firstName:"anna",
  lastName:"sanders",
  sayName:()=>{
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}
anna.sayName();

const btn = document.getElementById('btn');

// Traditional call back function expression
// btn.addEventListener('click', function(){
//   console.log(this);
//   this.style.color = 'black';
// })

// Arrow function will throw error
// btn.addEventListener('click', ()=>{
//   console.log(this);
//   this.style.color = 'black';
// })

// Traditional call back function expression case 2:
// btn.addEventListener('click', function(){
//   console.log(this);
//   setTimeout(function(){
//     this.style.color = 'black';
//   },3000)
// })

// Arrow function fixes the case 2:
btn.addEventListener('click', function(){
  console.log(this);
  setTimeout(()=>{
    this.style.color = 'black';
  },3000)
})
