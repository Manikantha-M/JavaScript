/* for of loop 
Loops through the values of an iterable object.
Can be used on String, Array, Map, Set etc - Not on Object
Unlike forEach we can use break and continue
*/
const fruits = ['apple', 'orange','banana','peach'];
const longName = 'John Smith Pepper III';
let reverse = '';
for (const char of longName){
    reverse = char + reverse;
}
console.log(reverse);

for(const fruit of fruits){
    console.log(fruit);
    if(fruit == 'banana') break;
}