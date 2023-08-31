import { fetchDrinks } from "./utils/fetchDrinks.js";
import { displaySingleDrink } from "./utils/displaySingleDrink.js";

const id = sessionStorage.getItem('drink');
const presentDrink = async () => {
    if(!id){
        window.location.replace('index.html')
    }else{
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displaySingleDrink(drink);
    }
}

window.addEventListener("DOMContentLoaded", presentDrink)