/* Async Await   
An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise. If the promise is rejected, the await expression throws the rejected value.
*/

// Promises DOM example

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

async function setColor(){
    await addColor(1000, heading1, 'red');
    await addColor(1000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    console.log('Ran set color')
}

function addColor(time, element, color) {
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => { element.style.color = color; resolve(); }, time);
        }
        else {
            reject(new Error('There is no such element'))
        }
    })
}

function printNum(n){
    console.log(n+1)
    n < 4 ? setTimeout(()=>printNum(n+1), 1000) : console.log('print completed');
}

console.log('Run set Color')
setColor();
console.log('Run Hello world')

console.log('start printing num')
printNum(0);