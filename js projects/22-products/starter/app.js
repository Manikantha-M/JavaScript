const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

const fetchProducts = async()=>{
    productsDOM.innerHTML = `<div class="loading"></div>`
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('Network response was not OK');
    }
    const data = await response.json();
    return data;
} catch (error) {
    console.log(error)
    productsDOM.innerHTML = `<p class="error">There was an error</p>`
}
};

const displayProducts = (list) => {
    const productList = list.map((product)=>{
        const {id, fields:{name:title, price, image:[{url:img}]}} = product;
        const formatPrice = price / 100;
        return `
        <a href="product.html?id=${id}" class="single-product">
            <img src="${img}" class="single-product-img img" alt="${title}">
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>
        `
    }).join('');
    productsDOM.innerHTML = ` <div class="products-container">
    ${productList}
    </div>`
    console.log(list);
}
const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}
start();