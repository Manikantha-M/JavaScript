/*
Object Destructuring
Here the const name should match with the property name.
*/

const bob = {
    first : 'Bob',
    last : 'Sanders',
    city : 'Chicago',
    siblings : {
        sister : 'Jane'
    }
};

const { first, last, city, siblings} = bob;
console.log(first,last,city,siblings);

// Aliasing
const {siblings:{sister : aliasSister}} = bob;
console.log(aliasSister)