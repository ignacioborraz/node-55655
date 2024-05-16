import buyProducts from "./buyProducts.js";

export default function printCartTotal(arrayOfProducts, id) {
  const total = arrayOfProducts.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const template = `
     <div class="cart-resume">
       <div class="cart-data">
         <h2 class="cart-title"><span>Resumen</span><span>del</span><span>pedido</span></h2>
         <div class="cart-total">
           <h3>Total</h3>
           <strong class="cart-price">${total}</strong>
         </div>
         <small class="cart-tax">Incluye impuesto PAIS y percepción AFIP.</small>
       </div>
       <button class="cart-btn" id="buy" type="button">COMPRAR</button>
   </div>`;
  const selector = document.getElementById(id);
  selector.innerHTML = template;
  if (arrayOfProducts.length > 0) {
    const buySelector = document.getElementById("buy");
    buySelector.addEventListener("click", buyProducts);
  }
}
