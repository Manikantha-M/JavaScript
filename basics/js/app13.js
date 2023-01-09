// Logical operators
// !, (|| - or), (&& - and)

const nam = 'bob';
const age = 24;
if (nam === 'bob') {
  console.log('hi there');
} else {
  console.log('nope');
}

if (nam === 'peter' || age === 24) {
  console.log('hi there');
} else {
  console.log('nope');
}

if (nam !== 'peter' && age === 24) {
  console.log('hi there');
} else {
  console.log('nope');
}
