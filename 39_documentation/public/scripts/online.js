let cookie = document.cookie.split("; ")
cookie = cookie.find(each=>each.split("=")[0]==="token")
//console.log(cookie);

if (cookie) {
  fetch("/api/sessions/online", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((res) => {
      //console.log(res);
      if (res.response) {
        if (res.response.role === "admin") {
          const anchor1 = document.createElement("a");
          anchor1.href = "/pages/add.html";
          anchor1.className = "btn btn-warning m-1 py-1 px-3";
          anchor1.textContent = "Add!";
          document.querySelector(".navbar-nav").append(anchor1);
          const anchor2 = document.createElement("a");
          anchor2.href = "/pages/match.html";
          anchor2.className = "btn btn-warning m-1 py-1 px-3";
          anchor2.textContent = "Match!";
          document.querySelector(".navbar-nav").append(anchor2);
        }
        document.querySelector("#login").remove();
        const button = document.createElement("button");
        button.id = "signout";
        button.type = "button";
        button.className = "btn btn-outline-dark m-1 py-1 px-3";
        button.textContent = "Sign out";
        button.addEventListener("click", signout);
        document.querySelector(".navbar-nav").append(button);
      }
    });
  //.catch((err) => console.log(err));
}

async function signout() {
  try {
    let response = await fetch("/api/sessions/signout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    location.replace("/");
  } catch (error) {
    console.log(error);
  }
}
