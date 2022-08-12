function fetchProducts() {
  document.getElementById('load').classList.add('show');
  fetch('https://course-api.com/react-store-products')
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      const container = document.querySelector('.products-center');
      for (let index = 0; index < products.length; index++) {
        const product = document.createElement('a');
        const img = document.createElement('img');
        const caption = document.createElement('div');
        const name = document.createElement('h3');
        const price = document.createElement('h3');
        let productName = products[index].name;

        product.setAttribute(
          'href',
          'productInfo.html?id=' + products[index].id
        );
        product.classList.add('product');
        product.setAttribute('id', products[index].id);
        img.classList.add('img');
        caption.classList.add('caption');
        name.classList.add('name');
        price.classList.add('price');
        img.src = products[index].image;
        name.innerHTML = productName;
        price.innerHTML = '$' + parseInt(products[index].price) / 100;
        product.appendChild(img);
        product.appendChild(caption);
        caption.appendChild(name);
        caption.appendChild(price);
        container.appendChild(product);
        document.getElementById('load').classList.add('hidden');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

document.onload = fetchProducts();
