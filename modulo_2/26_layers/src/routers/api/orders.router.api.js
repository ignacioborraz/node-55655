import CustomRouter from "../CustomRouter.js";
import {
  create,
  read,
  report,
  update,
  destroy,
} from "../../controllers/orders.controller.js";

class OrdersRouter extends CustomRouter {
  init() {
    this.create("/", ["USER", "PREM"], create);
    this.read("/bills/:uid", ["ADMIN"], report);
    this.read("/", ["USER", "PREM"], read);
    this.update("/:oid", ["USER", "PREM"], update);
    this.destroy("/:oid", ["USER", "PREM"], destroy);
  }
}

const ordersRouter = new OrdersRouter();
export default ordersRouter.getRouter();
