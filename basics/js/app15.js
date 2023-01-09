// while loop
/* initialize the value before and later update it. */

let amt = 10;

while (amt > 0) {
  console.log("I've " + amt);
  amt--;
}

// do while loop
/* initialize the value before and later update it. 
Run do block first and then the condition. 
Runs at least once. */

let money = 5;
do {
  console.log("You've " + money);
  money++;
} while (money < 11);
