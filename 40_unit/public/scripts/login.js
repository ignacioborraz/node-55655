if (cookie) {
  document.querySelector(
    "main"
  ).innerHTML = `<h1 class="h1-title d-flex justify-content-center align-items-center my-4 text-center">Bad Request!</h1>`;
} else {
  const button = document.querySelector("#submit");
  button.addEventListener("click", async () => {
    try {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const data = { email, password };
      //console.log(data);
      let response = await fetch("/api/sessions/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      response = await response.json();
      //console.log(response);
      if (response.status !== "success") {
        document.querySelector(
          ".alerts"
        ).innerHTML = `<span class="text-center text-danger w-100">${response.message}</span>`;
      } else {
        location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
