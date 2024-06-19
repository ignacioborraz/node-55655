import printProductCards from "./printProductCards.js";

export default async function fetchOnSale() {
  try {
    let res = await fetch("/api/products");
    res = await res.json();
    const onsale = res.response.filter((each) => each.onsale);
    printProductCards(onsale, "product-container");
  } catch (error) {
    console.log(error);
  }
}
