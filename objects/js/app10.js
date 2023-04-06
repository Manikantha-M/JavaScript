// apply()
/*
The apply() method calls the function with a given object.
apply(thisArg, [arg1, arg2,...])
*/

let greet = function(city, country){
    console.log(this);
    console.log(`I'm ${this.name} and my age is ${this.age} and I live in ${city}, ${country}`);
}
let john = {
    name : 'john',
    age : 25
}
greet.apply(john, ['San Diego', 'US']);