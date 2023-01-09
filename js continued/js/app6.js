// Value vs Reference

/* When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value. 
When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the refereces. */

let num = 1;
let num2 = num;
console.log(num);
console.log(num2);
num2 = 7;
console.log(num2);
console.log(num);

// Object is a non-primitive data type value
let person = { nam: 'bob' };
let person2 = person;
console.log(person.nam);
console.log(person2.nam);
person2.nam = 'mani';
console.log(person.nam);
console.log(person2.nam);

// To fix the reference problem, use Spread operator.
let x = { nam: 'anna' };
let y = { ...x };
y.nam = 'hi';
console.log(x.nam);
console.log(y.nam);

// Array is also a non-primitive data type value
let arr = ['hi', 'hi'];
let k1 = [...arr];
let k2 = arr;
k2[0] = [1, 2, 3, 4];
console.log(arr);
console.log(k1);
console.log(k2);
