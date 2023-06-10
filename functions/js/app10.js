// Array Destructuring

const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a,b,c);
// skip a value
const [x,,y] = numbers;
console.log(x,y);