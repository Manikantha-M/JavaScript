/*
Promises

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/

const promiseOne = new Promise((resolve, reject)=>{});
// console.log(promiseOne);

const promiseTwo = new Promise((resolve, reject)=>{
    let value = false;
    if(value) resolve('value is true');
    else reject('there was an error, value is false');
});
// console.log(promiseTwo);

// Handlers
// promiseTwo.then(onfulfilled,onrejected);

// function onfulfilled(value){
//     console.log(value);
// };
// function onrejected(reason){
//     console.log(reason);
// };

// promiseTwo.then((value)=>{
//     console.log(value);
// }, (reason)=>{
//     console.log(reason);
// })

promiseTwo.then(value => console.log(value))
.catch(error => console.log(error))