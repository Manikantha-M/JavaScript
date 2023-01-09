// Higher Order Function, Callback Function
/* In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. */
/* Higher order function -- accepts another function as an argument or returns another function. */
/* Callback function -- passed to another function as an argument and executed inside that function. */

function message(nam) {
  return `Good morning ${nam.toUpperCase()}`;
}

function greet(nam, cb) {
  const myName = 'Mani';
  console.log(`${cb(nam)}, I'm ${myName}`);
}
greet('bobo', message);
greet('peter', message);
