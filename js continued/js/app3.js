// Array properties and methods

let nam = ['john', 'bobo', 'barry', 'olga', 'ben'];
// length
console.log(nam.length);
console.log(nam[nam.length - 1]);

// array concatenation
let nam2 = ['pepper', 'onion', 'banana'];
const names = nam.concat(nam2);
console.log(names);
// reverse the array
console.log(nam.reverse());
console.log(nam);

// unshift() -- to add an item at the beginning.
nam2.unshift('hi');
console.log(nam2);
// shift() -- to remove the first item. Also returns the removed item.
let k1 = nam2.shift();
console.log(nam2);
console.log(k1);
// push() -- to add an item in the last.
nam2.push('hello');
console.log(nam2);
// pop() -- to remove the last item. Also returns the removed item.
let k2 = nam2.pop();
console.log(nam2);
console.log(k2);

// splice(index, count) -- to remove a section of items from the array. Also returns the removed section.
console.log(nam);
console.log(nam.reverse());
console.log(nam);
let k3 = nam.splice(0, 3);
console.log(nam);
console.log(k3);
