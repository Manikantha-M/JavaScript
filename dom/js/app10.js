// getAttribute(), setAttribute()
/* The getAttribute() returns the value of the attribute with the specified name, of an element. 
The setAttribute() adds the specified attribute to an element, and gives it the specified value. If the specified attribute already exists, only the value is changed.
*/
/* textContent property is also used to set the text content of an element. */

const first = document.querySelector('.first');
console.log(first);
console.log(first.getAttribute('class'));

const link = document.getElementById('link');
console.log(link.getAttribute('href'));

const lastItem = link.nextElementSibling;
lastItem.setAttribute('class', 'first');
console.log(lastItem);
lastItem.textContent = 'Manikantha';

const items = document.querySelectorAll('.first');
console.log(items);
