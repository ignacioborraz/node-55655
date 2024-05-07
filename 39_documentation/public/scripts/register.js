if (cookie) {
  document.querySelector(
    "main"
  ).innerHTML = `<h1 class="h1-title d-flex justify-content-center align-items-center my-4 text-center">Bad Request!</h1>`;
} else {
  const button = document.querySelector("#submit");
  button.addEventListener("click", async () => {
    try {
      const first_name = document.querySelector("#first_name").value;
      const last_name = document.querySelector("#last_name").value;
      const avatar = document.querySelector("#avatar").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const data = { first_name, email, password };
      last_name && (data.last_name = last_name);
      avatar && (data.avatar = avatar);
      //console.log(data);
      let response = await fetch("/api/sessions/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      response = await response.json();
      console.log(response);
      if (response.status !== "success") {
        document.querySelector(
          ".alerts"
        ).innerHTML = `<span class="text-center text-danger w-100">${response.message}</span>`;
      } else {
        document.querySelector("form").reset();
        document.querySelector(
          ".alerts"
        ).innerHTML = `<span class="text-center text-success w-100">Ok! Please log in!</span>`;
      }
    } catch (error) {
      console.log(error);
    }
  });
}
