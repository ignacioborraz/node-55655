export default function createCartCard(cid, product, quantity) {
  return `
    <article class="product-cart">
      <img class="product-img" src="${product.images[0]}" alt="${product.title}">
      <div class="product-details">
        <strong class="product-title">${product.title}</strong><span class="product-description">- ${product.colors[0]}</span>
        <p class="product-description">${product.description}</p>
        <div class="cart-inputs">
          <input class="product-input" type="number" name="quantity" value=${quantity} min="1" id="change-${cid}" onchange="changeQuantityCart(event)">
          <span class="product-description">$${product.price}</span>
          <button type="button" id="${cid}" class="remove-btn" onclick="removeProduct">Quitar del Carrito</button>
        </div>
      </div>
      <strong class="price">AR$ ${product.price * quantity}</strong>
    </article>
  `;
}
