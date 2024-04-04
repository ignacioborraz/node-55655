const google = document.querySelector("#google");
google.addEventListener("click", async () => {
  try {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch("/api/sessions/google", opts);
    response = await response.json();
    console.log(response);
    //alert(response.message);
    //response.session && location.replace("/");
  } catch (error) {
    alert(error.message);
  }
});

const github = document.querySelector("#github");
github.addEventListener("click", async () => {
  try {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch("/api/sessions/github", opts);
    response = await response.json();
    console.log(response);
    //alert(response.message);
    //response.session && location.replace("/");
  } catch (error) {
    alert(error.message);
  }
});