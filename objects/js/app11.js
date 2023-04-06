// bind()
/*
Using bind() method we can assign a function to a variable and invoke it later.
bind(thisArg, arg1, arg2,...)
*/

let greet = function(city, country){
    console.log(this);
    console.log(`I'm ${this.name} and my age is ${this.age} and I live in ${city}, ${country}`);
}
let john = {
    name : 'john',
    age : 25
}

const johnGreet = greet.bind(john, 'San Diego', 'US')
johnGreet();