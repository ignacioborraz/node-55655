import printCartTotal from "./printCartTotal.js";

export default function changeQuantityCart(event, arrayOfProducts) {
  let one = arrayOfProducts.find((each) => each.id === event.target.id);
  one.quantity = event.target.value;
  localStorage.setItem("cart", JSON.stringify(arrayOfProducts));
  printCartTotal(arrayOfProducts, "total");
  Swal.fire({
    text: "El total se ha actualizado!",
    position: "top-right",
    width: "300px",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
