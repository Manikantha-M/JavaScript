// String properties and methods
/* trim() removes the leading and trailing white spaces from a string. 
slice(start, end) returns a section of a string. End index is non inclusive. */
let text = ' Peter Jordan';
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('e'));
console.log(text.trim());
console.log(text.startsWith(' Peter'));
console.log(text.includes('ter'));
console.log(text.slice(0, 4));
// starts from -3 and goes to -2.
console.log(text.slice(-3, -1));
// starts from -3 and goes to end.
console.log(text.slice(-3));
