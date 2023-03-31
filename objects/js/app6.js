//  Constructor property
/*
All objects in javascript have access to their Constructor functions.
 */

function Book(name,author){
    this.name = name;
    this.author = author;
}
const js = new Book('JavaScript: The Definitive Guide', 'David Flanagan');

console.log(js.constructor)
// we can make use of the constructor property of js object to create a new obj.
let disney = new js.constructor('cartoon','disney');
console.log(disney)

let obj = {}
console.log(obj.constructor)

let arr = [];
console.log(arr.constructor)

let fun = function(){}
console.log(fun.constructor)