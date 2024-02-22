const selector = document.querySelector("#register");
selector.addEventListener("click", async () => {
  try {
    const data = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      name: document.querySelector("#name").value,
    };
    document.querySelector("#lastName").value &&
      (data.lastName = document.querySelector("#lastName").value);
    document.querySelector("#photo").value &&
      (data.photo = document.querySelector("#photo").value);
    document.querySelector("#age").value &&
      (data.age = document.querySelector("#age").value);
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch("/api/sessions/register", opts);
    response = await response.json();
    console.log(response);
    response.statusCode === 201
      ? location.replace("/sessions/login")
      : alert("ERROR: " + response.message);
  } catch (error) {
    alert(error.message);
  }
});
