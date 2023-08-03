/* Callback hell
An example of callback hell

Soup Recipe

boil water 2min
chop carrots
add carrots
cook carrots 2min
chop onions
add onions
cook onions 2min

*/

boilWater();

function boilWater(){
    console.log('started boiling water');
    console.log('chop carrots');
    setTimeout(()=>{
        console.log('water boiled');
        console.log('add carrots');
        console.log('chop onions');
        setTimeout(()=>{
            console.log('cooked carrots');
            console.log('add onions');
            setTimeout(()=>{
                console.log('cooked onions')
                console.log('Soup ready')
            },2000);
        },2000)
    },2000)
}