/*
Array.of()
The Array.of() static method creates a new Array instance from a variable number of arguments.

Array.from()
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
*/

const array = Array.of('john',2,true);
console.log(array)

// String is an array like object
const udemy = 'udemy';
console.log(Array.from(udemy));

// Arguments is an array like object
function countTotal(){
    console.log(arguments);
    console.log(Array.from(arguments))
}
countTotal(67,54,89);