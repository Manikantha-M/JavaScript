// Local scope

/* Local variable : 
Variables which are declared inside the code block {} are local variables. Local variable is accessible only inside the code block {} where it is declared. */
/* Local variables are created when a code block {} starts running, and deleted when the code block {} stops running. So, we can create variables with same name in different code blocks {} and, even we can use name of a global variable for a local variable. */
/* If you assign a value to a variable that has not been declared, it will automatically become a Global variable, even if you do this inside a code block {}. */

{
  nam = 'Mani';
}
console.log(nam);

function fun() {
  nam2 = 'Hello';
}
fun();
console.log(nam2);
