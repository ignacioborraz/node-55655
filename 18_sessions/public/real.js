console.log("socket");

const socket = io();

socket.on("movies", (data) => {
  //console.log(data);
  const template = data
    .map(
      (each) => `
      <div class="card m-2" style="width: 360px">
        <img src="${each.poster}" style="height: 240px" class="card-img-top object-fit-cover" alt="${each.name}">
        <h5 class="p-2 text-center card-title">${each.name}</h5>
      </div>
    `
    )
    .join("");
  document.querySelector("#movies").innerHTML = template;
});

document.querySelector("#newEvent").addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#name").value;
  const poster = document.querySelector("#poster").value;
  const price = document.querySelector("#price").value;
  const capacity = document.querySelector("#capacity").value;
  const place = document.querySelector("#place").value;
  const date = document.querySelector("#date").value;
  const data = {};
  title && (data.name = title);
  poster && (data.poster = poster);
  price && (data.price = price);
  capacity && (data.capacity = capacity);
  place && (data.place = place);
  date && (data.date = date);
  //console.log(data);
  socket.emit("newMovie", data);
});
