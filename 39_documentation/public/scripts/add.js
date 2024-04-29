const button = document.querySelector("#submit");
button.addEventListener("click", async () => {
  try {
    const name = document.querySelector("#name").value;
    const specie = document.querySelector("#specie").value;
    const image = document.querySelector("#image").value;
    const birthDate = document.querySelector("#birthDate").value;
    const data = { name, specie };
    image && (data.image = image);
    birthDate && (data.birthDate = birthDate);
    //console.log(data);
    let response = await fetch("/api/pets", {
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
      document.querySelector("form").reset();
      document.querySelector(
        ".alerts"
      ).innerHTML = `<span class="text-center text-success w-100">Done!</span>`;
    }
  } catch (error) {
    console.log(error);
  }
});
