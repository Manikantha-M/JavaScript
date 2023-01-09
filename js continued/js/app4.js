// Exercise - Full name

const nam = ['anna', 'susy', 'bob'];
const lastName = 'M';
const newArray = [];
for (i = 0; i < nam.length; i++) {
  newArray.push(`${nam[i]} ${lastName}`);
}
console.log(newArray);
