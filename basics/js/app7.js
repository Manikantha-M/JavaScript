// data types
/* There are 7 data types.
Primitive -- string, number, boolean, null, undefined, symbol. 
object -- arrays, functions, objects. */
// We have typeof operator.
/* JavaScript has implicit type conversion. 
To perform explicit type conversion, we have parseInt(string, radix), parseFloat(). 
Using parseInt(string, radix), we can convert binary, octal, hexa to decimal. */

const text = 'some text';
console.log(typeof text);
console.log(typeof 40);
console.log(typeof true);
let n;
console.log(typeof n);

const a = 6;
const b = '6';
let res = a + b;
console.log(res);

res = a + parseInt(b);
console.log(res);

const c = '5.25';
res = a + c;
console.log(res);
res = a + parseFloat(c);
console.log(res);

let h = '101';
h = parseInt(h, 2);
console.log(h);
h = 'A';
h = parseInt(h, 16);
console.log(h);
