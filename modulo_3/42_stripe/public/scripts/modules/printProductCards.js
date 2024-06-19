import createProductCard from "./createProductCard.js";

export default function printProductCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  const productsSelector = document.getElementById(idSelector);
  if (arrayOfProducts.length > 0) {
    arrayOfProducts
      .sort((a, b) => a.title.localeCompare(b.title))
      .forEach(
        (each) =>
          (productsTemplate = productsTemplate + createProductCard(each))
      );
    productsSelector.innerHTML = productsTemplate;
  } else {
    productsSelector.innerHTML =
      "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
  }
}
