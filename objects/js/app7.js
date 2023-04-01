// Prototype property
/*
    Every Constructor function in JavaScript has a Prototype property, and this prototype property is shared across all the instace obejcts created by the Constructor function.
    This concept is also called Prototypal Inheritance Model.
*/

function Account(name, initialBal){
    this.name = name;
    this.balanace = initialBal;
}
let john = new Account('john', 200);
console.log(john)
// Now we want to store Bank Name and it is going to be the same for all object instances.
console.log(Account.prototype);
Account.prototype.bankName = 'SBI';
Account.prototype.deposit = function(amount){
    this.balanace += amount;
    console.log(`Hello ${this.name}, Deposit Success! Your Balance is ${this.balanace}`);
}
console.log(Account.prototype);
john.deposit(300);