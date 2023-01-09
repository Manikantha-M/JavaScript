// className, classList
/* className property sets or returns the value of element's class attribute. Every time you set the class using className property it overrides the existing class. */
/* The classList property returns the class name(s) of an element, as a DOMTokenList object. This property is useful to add, remove and toggle CSS classes on an element. */

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
console.log(first.className);

second.className = 'color';
console.log(second);
// to set multiple classes using className
second.className = 'color text';

// third.classList.add('color');
// third.classList.add('text');
// or to add multiple values using classList
third.classList.add('color', 'text');
const result = third.classList;
console.log(result);
third.classList.remove('text');
console.log(third.classList);
console.log(third.classList.contains('text'));
