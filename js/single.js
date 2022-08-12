let productID = location.search.split('=')[1];
async function getProduct() {
  document.getElementById('load').classList.add('show');
  const procuct = await fetch('https://course-api.com/react-store-products');
  const data = await procuct.json();
  return data.find((product) => product.id == productID);
}
getProduct().then((product) => {
  const container = document.querySelector('.product-detail');
  let shipping = '';
  console.log(product.shipping);
  if (product.shipping) {
    shipping = 'shipping';
  }
  const productElement = `
        <div class="single-product img">
            <img src="${product.image}" alt="" srcset="">
        </div>
        <div class="product-info">
            <h1 class="product-name">${product.name}</h1>
            <h2 class="company">${product.company}</h2>
            <p class="product-price">$${parseInt(product.price) / 100}</p>
            <div class="dot ${shipping}"><span>Shipping</span></div>
            <div class="desc">${product.description}</div>
            <a class="add-to-cart">add to cart</a>
       </div>
    `;
  container.innerHTML = productElement;
  document.getElementById('load').classList.add('hidden');
});
