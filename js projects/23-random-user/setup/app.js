import { getElement } from "./utils/getElement.js";
import { getUser } from "./utils/fetchUser.js";
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];
console.log(btns);


const showUser = () => {
    // get user from API
    getUser().then(randomUser => {
        img.src = randomUser.img;
        value.textContent = randomUser.fullName;
        title.textContent = `My name is`;
        btns[0].classList.add('active');
        btns.forEach(btn => {
            const label = btn.dataset.label;
            btn.addEventListener('click', () => {
                title.textContent = `My ${label} is`;
                value.textContent = randomUser[label]
                console.log(randomUser[label]);
            })
        })
}).catch(err => console.log(err));
    
    // display user
}
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);