import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
let storeArray;
const setupPrice = (store) => {
    storeArray = store;
    // setup filter
    let maxPrice = store.map(product=>product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice/100);
    priceInput.value = maxPrice;
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Value: $${maxPrice}`;
};
priceInput.addEventListener("input", ()=>{
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;
    let newStore = storeArray.filter(product => (product.price / 100) <= value);
    display(newStore, getElement(".products-container"),true);
    if(newStore.length < 1){
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
})
export default setupPrice;
