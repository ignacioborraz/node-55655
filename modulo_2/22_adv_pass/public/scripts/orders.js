const selectors = document.querySelectorAll(".deleteButton");
selectors.forEach((each) =>
  each.addEventListener("click", async (event) => {
    console.log(event.target);
    try {
      const url = "/api/orders/" + event.target.id;
      const opts = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      let response = await fetch(url, opts);
      response = await response.json();
      console.log(response);
      if(response.statusCode===200) {
        alert(response.message);
        location.reload()
      }
    } catch (error) {
      alert(error.message);
    }
  })
);
