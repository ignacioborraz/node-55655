import { hideSearch, printIcons } from "./modules/printLayout.js";
import fetchOptions from "./modules/fetchOptions.js";
import fetchOnSale from "./modules/fetchOnSale.js";
import printDetails from "./modules/printDetails.js";

hideSearch();
printIcons();
fetchOptions();
fetchOnSale();

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
printDetails(id);
