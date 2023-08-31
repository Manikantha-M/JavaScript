import { hideLoader } from "./toggleLoading.js";
import getElement from "./getElement.js";

const img = getElement(".drink-img");
const drinkName = getElement(".drink-name");
const description = getElement(".drink-desc");
const ingredients = getElement(".drink-ingredients");
export const displaySingleDrink = (data) => {
    if(data){
        hideLoader();
        const {drinks:[{strDrinkThumb:image, strDrink:name, strInstructions:desc, strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5}] }= data;

        const ingredientsArray = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
        ];

        img.src = image;
        document.title = name;
        drinkName.textContent = name;
        description.textContent = desc;
        ingredients.innerHTML = ingredientsArray.map((item)=>{
            if(!item) return;
            return `<li><i class="far fa-check-square"></i>${item}</li>`;
        }).join("");
    }
    
}
