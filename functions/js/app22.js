/* String includes() --> case sensitive
Array includes()  --> case sensitive
*/

const personName = 'John';
console.log(personName.toLocaleLowerCase().includes('jo'));

const groceries = ['milk','bread','meet'];
console.log(groceries.includes('milk'));