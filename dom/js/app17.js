// innerHTML
/* The innerHTML property sets or returns the HTML content (inner HTML) of an element. */
/* The innerHTML property returns the inner HTML as a string. 
The innerHTML property sets the inner HTML using backticks(as a string). */

const unList = document.getElementById('first');
const div = document.getElementById('second');
const listItem = document.querySelector('.item');

console.log(div.textContent);
console.log(unList.innerHTML);
console.log(unList.textContent);

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">item1</li>
      <li>item2</li> <li>item3</li>`;
console.log(ul);
document.body.appendChild(ul);
