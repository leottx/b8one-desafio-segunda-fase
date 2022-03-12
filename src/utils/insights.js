import { fetchData } from '@utils/general';
import { formatCurrency } from '@utils/general';

const populateProductList = async () => {
  let { products } = await fetchData('products/more-sold');

  const productListElement = document.getElementById('product-list');

  products = products.map((product, index) => {
    const { name, orderId, department, price, image } = product;

    return `
      <li class="insights__product">
        <img src=${image} alt="PC gamer" class="insights__product-image">
        <p class="insights__product-descr">${name}</p>
        <span class="insights__product-index">${index + 1}</span>
        <span class="insights__product-sku">${orderId}</span>
        <span class="insights__product-dept">${department}</span>
        <span class="insights__product-price">${formatCurrency(price)}</span>
      </li>
    `;
  });

  products.unshift(`
    <li class="insights__head">
      <span class="insights__label insights__prod-label">Produto</span>
      <span class="insights__label insights__sku-label">Número do pedido</span>
      <span class="insights__label insights__dept-label">Departamento</span>
      <span class="insights__label insights__price-label">Valor</span>
    </li>
  `);

  products = products.join('');

  productListElement.innerHTML = products;
};

populateProductList();
