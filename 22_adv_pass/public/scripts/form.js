const selector = document.querySelector("#create");
selector.addEventListener("click", async () => {
  try {
    const data = {
      title: document.querySelector("#title").value,
      place: document.querySelector("#place").value,
    };
    document.querySelector("#poster").value &&
      (data.poster = document.querySelector("#poster").value);
    document.querySelector("#price").value &&
      (data.price = document.querySelector("#price").value);
    document.querySelector("#capacity").value &&
      (data.capacity = document.querySelector("#capacity").value);
    document.querySelector("#date").value &&
      (data.date = document.querySelector("#date").value);
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch("/api/events", opts);
    response = await response.json();
    response.statusCode === 201
      ? alert("Event created!")
      : alert("ERROR: "+response.message);
  } catch (error) {
    alert(error.message);
  }
});
