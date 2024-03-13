import { fork } from "child_process";

import CustomRouter from "../CustomRouter.js";
import usersRouter from "./users.router.api.js";
import eventsRouter from "./events.router.api.js";
import ordersRouter from "./orders.router.api.js";
import sessionsRouter from "./sessions.router.api.js";
import commentsRouter from "./comments.router.api.js";

class ApiRouter extends CustomRouter {
  init() {
    this.use("/users", usersRouter);
    this.use("/events", eventsRouter);
    this.use("/orders", ordersRouter);
    this.use("/sessions", sessionsRouter);
    this.use("/comments", commentsRouter);
    this.read("/sum", ["PUBLIC"], async (req, res) => {
      try {
        console.log("global process id: " + process.pid);
        const child = fork("./src/utils/sum.util.js");
        child.send("start");
        child.on("message", (result) => res.success200(result));
        //const child1 = fork("./src/utils/sum.util.js");
        //const child2 = fork("./src/utils/subtract.util.js");
        //child1.send("start");
        //child2.send("start");
        //const results = {}
        //child1.on("message", (result) => results.sum = result);
        //child2.on("message", (result) => results.substract = result);
        //return res.success200(results)
      } catch (error) {
        return next(error);
      }
    });
  }
}

const apiRouter = new ApiRouter();
export default apiRouter.getRouter();
