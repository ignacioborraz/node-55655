import Cart from "./models/cart.model.js";
import Manager from "./Manager.mongo.js";

const cartsManager = new Manager(Cart);
export default cartsManager;
