const productDom = document.querySelector('.product');
const baseURL = `https://course-api.com/javascript-store-single-product?id=`;

const fetchProduct = async () => {
    productDom.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const url = baseURL + id;
        const response = await fetch(url);
        if(!response.ok) throw new Error('Network response was not OK');
        return await response.json()
    } catch (error) {
        console.log(error);
        productDom.innerHTML = `<p class="error">There was a problem loading the product, Please try again later</p>`
    }
}
const displayProduct = async (product) => {
   const {fields:{company, name:title, price, description, image:[{url:img}], colors:[color1,color2]}} = product;
   productDom.innerHTML =  `<div class="product-wrapper">
<img src="${img}" alt="" class="img">
<div class="product-info">
    <h3>${title}</h3>
    <h5>${company}</h5>
    <span>$${price/100}</span>
    <div class="colors">
        <span class="product-color" style="background:${color1}"></span>
        <span class="product-color" style="background:${color2}"></span>
    </div>
    <p>${description}</p>
    <button class="btn">add to cart</button>
</div>
</div>`
}
const start = async() => {
    const data = await fetchProduct();
    displayProduct(data);
}
start();