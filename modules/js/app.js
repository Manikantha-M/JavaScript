// import { random } from "../utils/data.js";
// import { people } from "../utils/data.js";
import { random, people  } from "../utils/data.js";
import whatever from '../utils/data2.js';
import getEle from '../utils/data3.js';

// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');

// const showPeople = () => {
//     const newPeople = people.map((person)=>{
//         const {name, job} = person;
//         return `<p>${name} <strong>${job}</strong></p>`
//     }).join('');
//     container.innerHTML = newPeople;
// }

// btn.addEventListener('click',()=>{
//     showPeople()
// })
console.log(random);
console.log(people);
console.log(whatever('Mani'));
console.log(getEle('.container'));