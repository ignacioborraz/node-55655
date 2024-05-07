fetch("/api/users?limit=1000")
  .then((res) => res.json())
  .then((res) => {
    //console.log(res.payload.users);
    const ownerSelect = document.querySelector("#owner");
    let options = res.payload.users
      .map(
        (each) =>
          `<option value="${each._id}">${each.first_name.toUpperCase()} ${
            each.last_name ? each.last_name.toUpperCase() : ""
          }</option>`
      )
      .join("");
    options = "<option selected disabled>...</option>" + options;
    ownerSelect.innerHTML = options;
  });
fetch("/api/pets?limit=1000")
  .then((res) => res.json())
  .then((res) => {
    //console.log(res.payload.pets);
    const petSelect = document.querySelector("#pet");
    let options = res.payload.pets
      .map(
        (each) =>
          `<option value="${
            each._id
          }">${each.name.toUpperCase()} - ${each.specie.toUpperCase()}</option>`
      )
      .join("");
    options = "<option selected disabled>...</option>" + options;
    petSelect.innerHTML = options;
  });

const button = document.querySelector("#submit");
button.addEventListener("click", async () => {
  try {
    const pet = document.querySelector("#pet").value;
    const owner = document.querySelector("#owner").value;
    if(pet!=="..." && owner!=="...") {
      let response = await fetch(`/api/adoptions/${owner}/${pet}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      response = await response.json();
      //console.log(response);
      if (response.status !== "success") {
        document.querySelector(
          ".alerts"
        ).innerHTML = `<span class="text-center text-danger w-100">${response.message}</span>`;
      } else {
        alert("Done!")
        location.reload()
      }
    } else {
      document.querySelector(
        ".alerts"
      ).innerHTML = `<span class="text-center text-danger w-100">Incomplete values</span>`;
    }
  } catch (error) {
    console.log(error);
  }
});
