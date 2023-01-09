// Objects
/* contain key:value pairs and methods. We use dot notation. */
/* In JavaScript, object is also a variable. */

const person = {
  firstName: 'john',
  lastName: 'doe',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greet: function () {
    console.log("hello, I'm John");
  },
};
person.greet();
console.log(person.siblings);
console.log(person.age);
person.age = 50;
console.log(person.age);
