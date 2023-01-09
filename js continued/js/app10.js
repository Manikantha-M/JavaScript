// Global scope
/* Scope determines the accessibility of variables, objects, and functions from different parts of the code. */
/* In JavaScript, code block starts with "{" and ends with "}". */
/* Global variable : 
Variables which are declared outside code block {} are Global variables. Global variable can be accessed anywhere and also modified anywhere.*/

let nam = 'bobo';
nam = 'peter';
function fun() {
  console.log(nam);
  nam = 'orange';
}
fun();
console.log(nam);

let nam1 = 'hello';
if (true) {
  console.log(nam1);
  nam1 = 'hi';
}
console.log(nam1);

let nam2 = 'apple';
function fun1() {
  console.log(nam2);
  nam2 = 'mango';
  function fun2() {
    console.log(nam2);
    nam2 = 'banana';
  }
  fun2();
}
fun1();
console.log(nam2);

let nam3 = 'India';
{
  console.log(nam3);
  nam3 = 'Manikantha';
}
console.log(nam3);
