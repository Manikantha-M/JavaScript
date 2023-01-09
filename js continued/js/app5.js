// Exercise -- Calculate Total

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calcTotal(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
  if (total > 1000) {
    console.log('too much');
  } else {
    console.log('good');
  }
  return total;
}
const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);
const randomTotal = calcTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
