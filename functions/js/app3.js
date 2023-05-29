// Closure
/*
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/

function outer() {
    let name = "Mozilla";
    function inner() {
      console.log(name);
    }
    inner();
}
outer();

// Basic Example

// function newAccount(name, initBal){
//     let balance = initBal;
//    function showBalance(){
//     console.log(`Hey ${name}, your balance is ${balance}`)
//    }
//    return showBalance;
// }
// newAccount('Susan', 500)();

// const john = newAccount('john', 300); 
// const bob = newAccount('bob', 100); 
// john();
// bob();

// Complete Example

function newAccount(name, initBal){
    let balance = initBal;
   function showBalance(){
    console.log(`Hey ${name}, your balance is ${balance}`)
   }
   function deposit(amount){
    balance += amount;
    showBalance();
   }
   function withdraw(amount){
    if(amount > balance){
        console.log('Insufficient Funds');
        return;
    }
    balance -= amount;
    showBalance();
   }
   return {showBalance:showBalance, deposit:deposit, withdraw:withdraw};
}

const john = newAccount('john', 300); 
const bob = newAccount('bob', 100); 
john.showBalance();
bob.showBalance();
john.deposit(50);
john.withdraw(75);