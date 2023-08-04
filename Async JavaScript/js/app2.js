/* Callback hell
Nested callback functions are called callback hell.

An example of callback hell

Soup Recipe

boil water 2sec
chop carrots
add carrots
cook carrots 2sec
chop onions
add onions
cook onions 2sec

*/

// boilWater();

// function boilWater(){
//     console.log('started boiling water');
//     console.log('chop carrots');
//     setTimeout(()=>{
//         console.log('water boiled');
//         console.log('add carrots');
//         console.log('chop onions');
//         setTimeout(()=>{
//             console.log('cooked carrots');
//             console.log('add onions');
//             setTimeout(()=>{
//                 console.log('cooked onions')
//                 console.log('Soup ready')
//             },2000);
//         },2000)
//     },2000)
// }

//Callback hell DOM example
const heading1 = document.querySelector('.one') 
const heading2 = document.querySelector('.two') 
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    setTimeout(() => {
        heading1.style.color = 'red';
        setTimeout(() => {
            heading2.style.color = 'green';
            setTimeout(() => {
                heading3.style.color = 'blue';
            }, 1000);
        }, 1000);
    }, 1000);
})