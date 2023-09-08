// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");
let cart = getStorageItem("cart");
const init = () => {
  displayCartItemCount();
  displayCartTotal();
  setupCartFunctionality();
  displayCartItemsDOM();
}
export const addToCart = (id) => {
  const item = cart.find(cartItem => cartItem.id === id);
  if(!item){
    let product = findProduct(id);
    product = {...product, amount:1};
    cart = [...cart, product];
    addToCartDOM(product);
  }else{

  }
  setStorageItem("cart", cart);
  displayCartItemCount();
  displayCartTotal();
  openCart();
};
function displayCartItemsDOM(){
  cart.forEach(cartItem => {
    addToCartDOM(cartItem)
  })
}
function setupCartFunctionality(){

}
function displayCartTotal(){
  let total = cart.reduce((total,cartItem)=>{
    return total += cartItem.price * cartItem.amount
  },0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`
}
function displayCartItemCount(){
  const amount  = cart.reduce((total, cartItem)=>{
    return total += cartItem.amount;
  },0);
  cartItemCountDOM.textContent = amount;
}
init()