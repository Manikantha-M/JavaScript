// Null and Undefined
/* undefined -- A variable has been declared, but has not yet been assigned a value. 
null -- null is an assignment value set by the developer, it can be assigned to a variable as a representation of no value. JavaScript never sets a varible to null, this must be specifically done by the developer. */

console.log(1 == '1');
console.log(1 === '1');
console.log(0 == '');
console.log(0 === '');
console.log(0 == false);
console.log(0 === false);
console.log(1 == true);
console.log(1 === true);
console.log(1 != '1');
console.log(1 !== '1');

console.log(typeof null);
console.log(typeof undefined);

console.log(null == undefined);
console.log(null === undefined);
console.log(null != undefined);
console.log(null !== undefined);

let a;
console.log(a);
let b = null;
console.log(b);

console.log(1 + undefined);
console.log(1 + null);
