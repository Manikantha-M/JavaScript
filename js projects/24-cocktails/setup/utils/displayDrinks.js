import getElement from "./getElement.js";

export const displayDrinks = ({drinks}) => {
    const section = getElement('.section-center');
    const title = getElement('.title');
    if(!drinks){
        title.textContent = 'Sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink)=>{
        const {idDrink:id, strDrink:name, strDrinkThumb:image} = drink;
        return `<a href="drink.html">
        <article class="cocktail" data-id="1">
          <img src="${image}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>`
    }).join('');
    // Hide Loading
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
}