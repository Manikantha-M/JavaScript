// New String Methods

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith() -> case sensitive
console.log(person.startsWith('Pet'));
console.log(employee.startsWith('EM',6));

// endsWith() -> case sensitive
console.log(manager.endsWith('DOE'));
console.log(manager.endsWith('MAN', 9)); // -> Negative index

// includes()  -> case sensitive
console.log(employee.includes('PET'));

// repeat()
const multiplyPeople = (person, times=5) => person.repeat(times);
console.log(multiplyPeople(person));