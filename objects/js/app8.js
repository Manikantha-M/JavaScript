// ES6 class
/*
ES6 class is a syntactic sugar for Prototypal Inheritance.
class creates a new object.
*/

class Account{
    constructor(name, initBal){
        this.name = name;
        this.balance = initBal;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
    }
}
Account.prototype.bank = 'Chase';
const john = new Account('john', 200);
console.log(john)
john.deposit(300);