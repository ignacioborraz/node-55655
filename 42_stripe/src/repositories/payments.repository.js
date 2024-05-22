import Stripe from "stripe";
import CheckoutProduct from "../data/dto/checkout.dto.js";
import cartsManager from "../data/mongo/CartsManager.mongo.js";
//IMPLEMENTAR dao!!! ACA NO FUE IMPLEMENTADO

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const checkoutRepository = async (filter) => {
  try {
    let productsOnCart = await cartsManager.read(filter);
    productsOnCart = productsOnCart.map((each) => new CheckoutProduct(each));
    console.log(productsOnCart);
    const line_items = productsOnCart;
    const mode = "payment";
    const success_url = "http://localhost:8080/thanks.html";
    const intent = await stripe.checkout.sessions.create({
      line_items,
      mode,
      success_url,
    });
    return intent;
  } catch (error) {
    throw error;
  }
};

export default checkoutRepository;
