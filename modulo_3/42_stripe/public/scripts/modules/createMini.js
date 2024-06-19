import changeMini from "./changeMini.js";

export default function createMini(each) {
  const img = document.createElement("img");
  img.src = each;
  img.alt = each;
  img.className = "mini-img";
  img.onclick = (event) => changeMini(event);
  document.getElementById("minis").appendChild(img);
}
