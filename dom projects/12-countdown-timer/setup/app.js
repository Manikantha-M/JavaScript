// 5*22*45*60*1000
// 1*60*1000
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const h4s = document.querySelectorAll('.deadline-format h4')
console.log(h4s)

let futureDate = new Date(new Date().getTime() + (5*22*45*60*1000))
console.log(futureDate)

giveaway.textContent = `giveaway ends on ${futureDate.toLocaleDateString('en-GB', options)} ${futureDate.toLocaleTimeString('en-US')}`


// convert to ms for calculations
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime()
  const remainTime = futureTime - today;
  // Values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  const oneSec = 1000;
  // calculate all values
  let days = Math.floor(remainTime / oneDay);
  // console.log(days)
  // the remainder would be the number of hours in ms
  let hours =  Math.floor((remainTime % oneDay)/oneHour)
  // console.log(hours)
  // the remainder would be the number of mins in ms
  let mins = Math.floor((remainTime % oneHour) / oneMin);
  // console.log(mins)
  // the remiander would be the number of sec in ms
  let secs = Math.floor((remainTime % oneMin)/oneSec)
  // console.log(secs)
  
  const values = [days,hours,mins,secs];
  h4s.forEach(function(item,index){
    item.innerHTML = values[index]
  })

  if(remainTime < 0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}
getRemainingTime()

// countdown
let countDown = setInterval(getRemainingTime, 1000);