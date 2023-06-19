/* array.find(), array.filter() array.findIndex(), array.every(), array.some() */

const people = [
    {name:'john'},
    {name:'anna'},
    {name:'peter'}
]
const grades = ['A','B','C','D'];

console.log(people.filter(person => person.name === 'anna'));
console.log(people.find(person => person.name === 'anna'));
console.log(people.findIndex(person => person.name === 'peter'));

console.log(grades.every(grade => grade !== 'E'));
console.log(grades.some(grade => grade === 'C'))
