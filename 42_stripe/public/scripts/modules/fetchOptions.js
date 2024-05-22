import { printNavBar, printFooter } from "./printLayout.js";

export default async function fetchOptions() {
  try {
    let res = await fetch("./scripts/data/layoutOptions.json");
    res = await res.json();
    printNavBar(res, "navbar");
    printFooter(res, "footer");
  } catch (error) {
    console.log(error);
  }
}
