/* Spread operator 
syntax: ...
Spread syntax expands an array into its elements.
Used to copy JavaScript objects without referencing.
*/


const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john','peter','bob'];
const girls = ['susan','anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

const person = {name:'John',job:'dev'};
const newPerson = {...person, city:'chicago',name:'Peter'};
console.log(newPerson);

const headings = document.querySelectorAll('h1');
console.log(headings)
const headingsArr = [...headings];
console.log(headingsArr);

const numbers = [23,45,66,88,2345];
console.log(Math.max(...numbers));

const info = ['john','sanders'];
const sayHello = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}
sayHello(...info);