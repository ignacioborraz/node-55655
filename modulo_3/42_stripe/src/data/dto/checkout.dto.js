class CheckoutProduct {
  constructor(data) {
    this.price_data = {
      product_data: { name: data.product_id.title },
      currency: "usd",
      unit_amount: data.product_id.price * 100,
      //centavos de dolar!!!
    };
    this.quantity = data.quantity;
  }
}

export default CheckoutProduct;
