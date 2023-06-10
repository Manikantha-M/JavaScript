/*
Default Parameters and Arrow function Hoisting Gotchas

Since the arrow function in the below example is assigned to a variable the Hoisting will not work. If we try accessing the arrow function before its initialization we will get an error.

*/
// sayHello('bob')
const sayHello = (person = 'Susan') => console.log(`Hello ${person}`);
sayHello();