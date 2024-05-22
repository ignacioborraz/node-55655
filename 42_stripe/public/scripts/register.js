import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

document.querySelector("#register").addEventListener("click", async () => {
  const data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    photo: document.querySelector("#photo").value,
    age: document.querySelector("#age").value,
  };
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let response = await fetch("/api/sessions/register", opts);
  response = await response.json();
  if (response.statusCode === 201) {
    Swal.fire({
      title: response.message,
      icon: "success",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#ff3b3c",
    });
    //si no vamos a re-dirigir hay que re-setear el formulario!
    //return location.replace("/login.html");
  }
  return Swal.fire({
    title: response.message,
    icon: "error",
    timer: 5000,
    timerProgressBar: true,
    confirmButtonColor: "#ff3b3c",
  });
});
