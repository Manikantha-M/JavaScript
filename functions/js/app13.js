// New String Methods

const person = 'Peter Smith';
const employee = '23456-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// startsWith() -> case sensitive
console.log(person.startsWith('Pet'));
console.log(employee.startsWith('EM',6));

// endsWith() -> case sensitive
console.log(manager.endsWith('DOE'));
// Here the index is the index of searchString's last character plus 1.
console.log(manager.endsWith('MAN',9));  // 8 + 1

// includes()  -> case sensitive
console.log(employee.includes('PET'));

// repeat()
const multiplyPeople = (person, times=2) => person.repeat(times);
console.log(multiplyPeople(person));