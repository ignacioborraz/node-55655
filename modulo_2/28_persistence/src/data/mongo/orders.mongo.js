import MongoManager from "./manager.mongo.js";
import Order from "./models/order.model.js";

const orders = new MongoManager(Order);
export default orders;
