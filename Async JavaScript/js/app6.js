/* 
Promise.all()
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

Promise.allSettled()
Promise.allSettled() is a method in JavaScript that is used to handle multiple promises concurrently and collect their results, regardless of whether each promise is fulfilled or rejected.

When you have an array of promises, you can pass that array to Promise.allSettled(), and it returns a new promise that settles once all the input promises have either been fulfilled or rejected. Unlike Promise.all(), which immediately rejects if any of the input promises is rejected, Promise.allSettled() waits for all promises to settle and provides a result for each promise, regardless of whether it was fulfilled or rejected.

The returned promise resolves to an array of objects, each representing the outcome of an individual promise.

Promise.any()
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

Promise.prototype.catch()
The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. It is a shortcut for Promise.prototype.then(undefined, onRejected). catch() internally calls then() on the object upon which it was called, passing undefined and onRejected as arguments.

Promise.prototype.finally()
The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. This lets you avoid duplicating code in both the promise's then() and catch() handlers.

Promise.race()
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

Promise.prototype.then()
The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
*/


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// const promise4 = Promise.reject('rejected since one of the promises got rejected');

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// }, (reason)=> console.log(reason));
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//   }, (reason)=> console.log(reason));

// Promise.allSettled()
// const p1 = Promise.resolve(33);
// const p2 = new Promise((resolve)=>setTimeout(()=>resolve(66),0));
// const p3 = 99;
// const p4 = Promise.reject(new Error('an error'));

// Promise.allSettled([p1,p2,p3,p4]).then((values)=>console.log(values));

// Promise.any()
// const p1 = Promise.reject(new Error('p1 error'));
// const p2 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));

// const p2 = Promise.reject(new Error('p2 error'));
// const p3 = Promise.reject(new Error('p3 error'));
// const promises = [p1, p2, p3];

// Promise.any(promises).then((value) => console.log(value), (reason)=> console.log(reason));

// Promise.prototype.catch()
// const promise1 = new Promise((resolve, reject) => {
//     throw new Error('Uh-oh!');
//   });
  
//   promise1.catch((error) => {
//     console.log(error);
//   });

// Promise.prototype.finally()
// function checkMail() {
//     return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//         resolve('Mail has arrived');
//       } else {
//         reject(new Error('Failed to arrive'));
//       }
//     });
//   }
  
//   checkMail()
//     .then((mail) => {
//       console.log(mail);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log('Experiment completed');
//     });


// Promise.race()
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   const p3 = Promise.reject('Rejected');
//   Promise.race([p1, p2, p3]).then(value => console.log(value), reason=>console.log(reason));


// Promise.prototype.then()
  const p1 = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  
  p1.then(
    (value) => {
      console.log(value); // Success!
    },
    (reason) => {
      console.error(reason); // Error!
    },
  );