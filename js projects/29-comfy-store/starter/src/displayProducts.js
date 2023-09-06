import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
    console.log(products)
    element.innerHTML = products.map(products => {
        const {id, name, image, price} = products;
        return `  <article class="product">
        <div class="product-container">
          <img src="${image}" class="product-img" alt="${name}">
          <!-- product-icons -->
          <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon">
              <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
      </article>`
    }).join("")
};

export default display;
