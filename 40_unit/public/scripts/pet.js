let query = location.search;
const params = new URLSearchParams(query);
const pid = params.get("pid");

fetch("/api/pets/" + pid)
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    const card = `
            <article class="card mx-3 mb-3" style="height: 400px; width: 340px">
              <img src="${
                res.payload.image
              }" style="height: 280px" class="card-img-top object-fit-cover" alt="...">
              <div id="data" class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title">${res.payload.name} - ${
      res.payload.specie
    }</h5>
                ${
                  cookie
                    ? `<button style="width: 106px" id="adoptme" class="btn btn-warning m-0">Adopt me!</button>`
                    : `<a href="./login.html" style="width: 106px" class="btn btn-warning m-0">Log in!</a>`
                }
              </div>
            </article>`;
    document.querySelector("section").innerHTML = card;
    document.querySelector("#adoptme").addEventListener("click", adoptme);
  });

function adoptme() {
  document.querySelector("#adoptme").remove();
  const p = document.createElement("p");
  p.className = "text-success adoptme m-0";
  p.textContent = "Request sent!";
  document.querySelector("#data").append(p);
}
