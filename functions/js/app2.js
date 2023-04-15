/* 
Hoisting
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions(function keyword declarations only), variables(var declarations only) or classes to the top of their scope, prior to execution of the code.

But this only includes function, function*, async function, async function*, and var declarations.

Interpreter moves only the declaration not initialization(assignment).
ex): 
variable declaration
var a;
variable initialization(assigning a value)
var a = 1;

Now if we try to access variable a before the line where it is declared, we will get undefined.
*/

console.log(c);
var c = 10;
greet();
function greet(){
    console.log('Hello world');
}

greetName();
let n = 'John'
function greetName(){
    console.log(`Hello ${n}`)
}