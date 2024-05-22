import Product from "./models/product.model.js";
import Manager from "./Manager.mongo.js";

const productsManager = new Manager(Product);
export default productsManager;
