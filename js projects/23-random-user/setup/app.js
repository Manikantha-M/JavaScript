import { getElement } from "./utils/getElement.js";
import { getUser } from "./utils/fetchUser.js";
const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];
title.textContent = `My name is`;
let userObj= {};
btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const label = btn.dataset.label;
        btns.forEach(btn=> btn.classList.remove('active'));
        btn.classList.add('active');
        title.textContent = `My ${label} is`;
        value.textContent = userObj[label];
        console.log(userObj[label]);
    });
});

const showUser = () => {
    // get user from API
    getUser().then(randomUser => {
        btns[0].classList.add('active');
        userObj = randomUser;
        img.src = randomUser.img;
        value.textContent = randomUser.name;
    }).catch(err => console.log(err));
}
window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);