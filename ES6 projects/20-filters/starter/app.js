let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
const displayProducts = ()=>{
    productsContainer.innerHTML = filteredProducts.map(({id,title,image,price})=>{
        return `<article class="product" data-id="${id}">
        <img src="${image}" class="product-img img">
        <footer>
          <h5 class="produt-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
    }).join('');
}
displayProducts();