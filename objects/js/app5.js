// Constructor function
/*
Constructor function creates a new object using this keyword.
It is a common practice to use CapitalCase for naming a Constructor  function.
To create a new object using constructor function use new keyword.
*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`I am ${this.firstName} ${this.lastName}`);
  };
}
const john = new Person('john', 'smilga');
console.log(john);
john.fullName();

