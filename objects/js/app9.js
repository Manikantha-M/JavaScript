// call()
/*
The call() method calls the function with a given object.
*/

let greet = function(){
    console.log(this);
    console.log(`I'm ${this.name} and my age is ${this.age}`);
}
let john = {
    name : 'john',
    age : 25
}
greet.call(john);