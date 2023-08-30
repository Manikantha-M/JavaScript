import { showDrinks } from "./utils/presentDrinks.js";
import "./utils/searchForm.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", ()=>{
    showDrinks(url);
})