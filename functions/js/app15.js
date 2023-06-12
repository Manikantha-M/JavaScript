/* Spread operator 
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