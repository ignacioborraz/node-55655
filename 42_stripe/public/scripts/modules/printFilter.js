import fetchProducts from "./fetchProducts.js";

export default async function printFilter(evento) {
  const text = evento.target.value;
  await fetchProducts("products", text);
}
