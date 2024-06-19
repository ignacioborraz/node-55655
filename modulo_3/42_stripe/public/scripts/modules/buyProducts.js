import printCartCards from "./printCartCards.js";
import printCartTotal from "./printCartTotal.js";

export default () => {
  Swal.fire({
    title: "Desea confirmar la compra?",
    showCancelButton: true,
    confirmButtonColor: "#ff3b3c",
    icon: "question",
    confirmButtonText: "Sí!",
    cancelButtonText: "Todavía no",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Gracias por su compra!",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "#ff3b3c",
      });
      const cartproducts = [];
      localStorage.setItem("cart", JSON.stringify(cartproducts));
      printCartCards(cartproducts, "productscart");
      printCartTotal(cartproducts, "total");
    }
  });
};
