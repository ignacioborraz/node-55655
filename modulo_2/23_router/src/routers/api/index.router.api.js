import CustomRouter from "../CustomRouter.js";
import usersRouter from "./users.router.api.js";
import EventsRouter from "./events.router.api.js";
import ordersRouter from "./orders.router.api.js";
import sessionsRouter from "./sessions.router.api.js";

import passCallBackMid from "../../middlewares/passCallBack.mid.js";

const event = new EventsRouter()

export default class ApiRouter extends CustomRouter {
  init() {
    this.router.use("/users", usersRouter);
    this.router.use("/events", event.getRouter());
    this.router.use("/orders", passCallBackMid("jwt"), ordersRouter);
    this.router.use("/sessions", sessionsRouter);
  }
}
