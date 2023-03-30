// Factory Function
/* A factory function is a function that returns a new object. */

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(`I am ${this.firstName} ${this.lastName}`);
    },
  };
}
const john = createPerson('john', 'smilga');
console.log(john);
john.fullName();

