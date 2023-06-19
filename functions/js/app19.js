/* for in 
for in loop iterates over all the properties of an object.
*/
const person = {
    name:'john',
    age: 25,
    status:'student'
}
for(const property in person){
    console.log(property)
}