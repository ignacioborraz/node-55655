import createCartCard from "./createCartCard.js";
import changeQuantityCart from "./changeQuantityCart.js";
import removeProduct from "./removeProduct.js";

export default async function printCartCards(id) {
  try {
    let response = await fetch("/api/sessions/online");
    response = await response.json();
    const user_id = response.user_id;
    let products = await fetch("/api/carts?user_id=" + user_id);
    products = await products.json();
    products = products.response;
    let cartTemplates = "";
    const selector = document.getElementById(id);
    if (products?.length > 0) {
      for (const element of products) {
        cartTemplates =
          cartTemplates +
          createCartCard(element._id, element.product_id, element.quantity);
      }
      cartTemplates += "<button id='pagar'>PAGAR</button>";
      selector.innerHTML = cartTemplates;
      document.querySelectorAll(".product-input").forEach((each) => {
        each.onchange = (event) => changeQuantityCart(event, products);
      });
      document
        .querySelectorAll(".remove-btn")
        .forEach((each) => (each.onclick = removeProduct));
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      document.querySelector("#pagar").onclick = () =>
        fetch("/api/payments/checkout", opts)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.url);
            location.replace(res.url);
          });
    } else {
      selector.innerHTML = `
      <article class="product-cart">
        <strong class="product-title" style='width: 100%; text-align: center'>No hay productos en el carrito</strong>
      </article>
    `;
    }
  } catch (error) {
    console.log(error.message);
  }
}
