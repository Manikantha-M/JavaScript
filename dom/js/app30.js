// setTimeout
/*
    setTimeout - runs function once after specfic time
    - pass function reference, duration, and other arguments.
    - duration in ms. Default is 0ms
    - returns a unique identifier
    - clearTimeout to cancel
    - Available in window object
 */

function sayHello(){
    console.log('hello john');
}
sayHello();

setTimeout(sayHello,1000); 
//Only pass function reference(sayHello). Don't invoke the function by passing sayHello().If we invoke the function directly then there is no point in setting the time.

// setTimeout(sayHello(),5000) // Will not work

// Alternative Approach for setTimeout. ES6 Syntax
setTimeout(function(){
    console.log('Hey there')    // Callback function
},3000)

// With more Arguments

function showScore(name, score){
    console.log(`Hey ${name}, your score is ${score}`)
}

setTimeout(showScore, 2000, 'John', 45);

// Returns a unique identifier
const firstID = setTimeout(showScore, 1000, 'one', 22)
const secondID = setTimeout(showScore, 1000, 'two', 32)

console.log(firstID);
console.log(secondID);
clearTimeout(firstID);