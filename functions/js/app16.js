/* 
Rest operator
syntax: ...
Rest syntax collects multiple elements and condenses them into a single element.
*/

const alphaBets = ['a','b','c','d'];
const [first,...rest] = alphaBets;
console.log(first, rest);
const person = {name:'john', job:'dev', age:30};
const {job, ...leftOver} = person;
console.log(job,leftOver);

const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
   console.log(scores.reduce((prev,curr) => prev + curr, 0)/scores.length)
}
getAverage(person.name, 78,90,56,43);
// pass args using spread operator
const arr = [78,90,56,43];
getAverage(person.name, ...arr);