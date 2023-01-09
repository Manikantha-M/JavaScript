// Constructor function
/*
Constructor function is used to create new objects.
function name starts with a capital letter - convention.
new keyword must be used. 
*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`I am ${firstName} ${lastName}`);
  };
}
const john = new Person('john', 'smilga');
const mani = new Person('Mani', 'M');
console.log(john);
console.log(mani);
john.fullName();
mani.fullName();
