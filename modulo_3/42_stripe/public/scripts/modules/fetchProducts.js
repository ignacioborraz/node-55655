import printProductCards from "./printProductCards.js";

export default async function fetchProducts(id, filter) {
  try {
    let res = await fetch("/api/products/paginate?title="+filter);
    res = await res.json();
    printProductCards(res.response, id);
  } catch (error) {
    console.log(error);
  }
}
