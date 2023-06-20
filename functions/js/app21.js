/* 
Set 
The Set object lets you store unique values of any type.
*/

const unique = new Set();
const obj = {name:'john'};
unique.add(obj);
unique.add(50);
unique.add('first');
unique.add('first');
console.log(unique);
console.log(unique.delete(50));
console.log(unique);
console.log(unique.has('first'));
unique.clear();
console.log(unique)