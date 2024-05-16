import products from "../data/products.js";

export default function changeSubtotal(event, id) {
  const value = event.target.value;
  const found = products.find((each) => each.id === id);
  const subtotal = found.price * value;
  const priceSelector = document.querySelector("#price");
  priceSelector.innerHTML = "$" + subtotal;
}
