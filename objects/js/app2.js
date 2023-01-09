// nested objects
/* We can create an object within an object.
dot notation vs bracket notation */

const age = 60;
let random = 'random-key';
random = 'age';
const person = {
  name: 'John',
  age: age,
  job: {
    title: 'developer',
    company: {
      name: 'Neutrinos',
      address: 'bangalore',
    },
  },
  'random-key': 'random',
};

console.log(person);
console.log(person.job.title);
console.log(person.job.company.name);
console.log(person['random-key']);
console.log(person['name']);
console.log(person[random]);
