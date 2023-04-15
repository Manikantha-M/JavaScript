/* IIFE(Immediately Invoked Function Expression) 
An IIFE is a JavaScript function that runs as soon as it is defined.
It is a good way at protecting the scope of your function and the variables within it.
Our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
However this is a older approach. Newer is Modules.
*/


// global namespace
const num1 = 30;
const num2 = 50;

// regular function and its invocation
function add(){
    console.log(`the result is : ${num1 + num2}`);
}
add();

// IIFE
(function(){
    const num3 = 20;
    const num4 = 50;
    console.log(num3+num4);
})();
// pass args
(function(m,n){  
    console.log(m+n);
})(45,55);
// return a value
const sum = (function(m,n){  
   return m*n;
})(5,4);
console.log(sum)