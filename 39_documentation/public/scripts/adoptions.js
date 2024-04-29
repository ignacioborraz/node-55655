let query = location.search;
const params = new URLSearchParams(query);
const currentPage = Number(params.get("page")) || 1;

fetch("/api/adoptions?page=" + currentPage)
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    //console.log(res.payload.prev);
    //console.log(res.payload.next);
    const cards = res.payload?.adoptions
      .map(
        (each) => `
    <article class="card mx-3 mb-3" style="height: 400px; width: 340px">
      <div class="d-flex justify-content-center align-items-center">
        <img src="${
          each.owner.avatar
        }" style="height: 340px" class="w-50 card-img-top object-fit-cover" alt="...">
          <img src="${
            each.pet.image
          }" style="height: 340px" class="w-50 card-img-top object-fit-cover" alt="...">
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 class="card-title">${each.owner.first_name.toUpperCase()} & ${each.pet.name.toUpperCase()}</h5>
      </div>
    </article>`
      )
      .join("");
    document.querySelector("section").innerHTML = cards;
    const buttons = `${
      res.payload?.prev &&
      `<a href="/pages/adoptions.html?page=${res.payload.prev}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">previous</a>`
    }${
      res.payload?.next &&
      `<a href="/pages/adoptions.html?page=${res.payload.next}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">next</a>`
    }`;
    document.querySelector("aside").innerHTML = buttons;
  });
