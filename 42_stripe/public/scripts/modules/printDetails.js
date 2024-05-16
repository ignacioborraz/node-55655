import createMini from "./createMini.js";
import changeSubtotal from "./changeSubtotal.js";
import saveProduct from "./saveProduct.js";

export default async function printDetails(id) {
  let product = await fetch("/api/products/" + id);
  product = await product.json();
  product = product.response;
  const detailsTemplate = `
    <section class="product-images-block">
    <div id="minis" class="product-images"></div>
    <img class="big-img" id="big-img" src="${product.images[0]}" alt="${
    product.title
  }" />
    </section>
    <div class="product-description-block">
      <h1 class="product-title">${product.title}</h1>
      <form class="product-selector">
        <fieldset class="product-fieldset">
          <label class="product-label" for="color">Color</label>
          <select class="product-select" type="text" placeholder="Selecciona un color" id="color-${
            product._id
          }">
            ${product.colors
              .map((each) => `<option value=${each}>${each}</option>`)
              .join("")}
          </select>
        </fieldset>
      </form>
      <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>${product.description}</p>
      </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="price" class="checkout-total-price">$${product.price}</h2>
        <p class="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
          50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon"
              ><img src="./assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
              >Agrega el producto al carrito para conocer los costos de
              envío</span
            >
          </li>
          <li>
            <span class="policy-icon"
              ><img src="./assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
              >Recibí aproximadamente entre 10 y 15 días hábiles,
              seleccionando envío normal</span
            >
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input class="quantity" type="number" min="1" value="1" id="quantity-${
              product._id
            }"/>          
            <button type="button" id="buy-${
              product._id
            }" class="cart-btn">Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
  product.images.forEach(createMini);
  document
    .querySelector(".quantity")
    .addEventListener("change", (event) => changeSubtotal(event, id));
  document.querySelector(`#buy-${id}`).onclick = () => saveProduct(id);
}
