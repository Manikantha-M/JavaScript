// Factory Function
/* A factory function is a function that returns a new object. */

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName() {
      console.log(`I am ${firstName} ${lastName}`);
    },
  };
}
const john = createPerson('john', 'smilga');
const mani = createPerson('Mani', 'M');
console.log(john);
console.log(mani);

john.fullName();
mani.fullName();
