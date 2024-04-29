let query = location.search;
const params = new URLSearchParams(query);
const currentPage = Number(params.get("page")) || 1;

fetch("/api/pets?page=" + currentPage)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    //console.log(res.payload.prev);
    //console.log(res.payload.next);
    const cards = res.payload?.pets
      .map(
        (each) => `
            <article class="card mx-3 mb-3" style="height: 400px; width: 340px">
              <img src="${each.image}" style="height: 280px" class="card-img-top object-fit-cover" alt="...">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title">${each.name} - ${each.specie}</h5>
                <a href="/pages/pet.html?pid=${each._id}" style="width: 106px" class="btn btn-warning m-0">Adopt!</a>
              </div>
            </article>`
      )
      .join("");
    document.querySelector("section").innerHTML = cards;
    const buttons = `${
      res.payload?.prev &&
      `<a href="/pages/pets.html?page=${res.payload.prev}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">previous</a>`
    }${
      res.payload?.next &&
      `<a href="/pages/pets.html?page=${res.payload.next}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">next</a>`
    }`;
    document.querySelector("aside").innerHTML = buttons;
  });
