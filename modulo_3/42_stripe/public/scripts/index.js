import { printNavBar, printFooter, printIcons } from "./modules/printLayout.js";
import printFilter from "./modules/printFilter.js";
import fetchProducts from "./modules/fetchProducts.js";

printIcons();

fetch("./scripts/data/layoutOptions.json")
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((res) => {
    //console.log(res);
    printNavBar(res, "navbar");
    printFooter(res, "footer");
  })
  .catch((err) => console.log(err));

fetchProducts("products","")

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", printFilter);
