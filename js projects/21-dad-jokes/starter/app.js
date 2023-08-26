// random jokes
const url = 'https://icanhazdadjoke.com';
const headers = {"Accept": "application/json", "User-Agent":"Student Project"}

const btn = document.querySelector('.btn');
const p = document.querySelector('.result');
btn.addEventListener('click', async () => {
    p.textContent = 'Loading...';
    try{
        const response = await fetch(url,{headers});
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const jokeObj = await response.json();
        p.textContent = jokeObj.joke;
    } catch (error){
        p.textContent = error;
        console.log(error);
    }
})