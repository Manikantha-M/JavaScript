// Truthy and Falsy
/* Falsy values :
'', "", ``, 0, -0, NaN, false, null, undefined. 
Everything else are Truthy values. */

let text = '';
if (text) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

text = 'abc';
if (text) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}
