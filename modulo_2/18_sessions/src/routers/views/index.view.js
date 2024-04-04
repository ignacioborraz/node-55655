import { Router } from "express";

import { events } from "../../data/mongo/manager.mongo.js";
import eventsRouter from "./events.view.js";
import sessionsRouter from "./sessions.view.js"

const viewsRouter = Router();

viewsRouter.get("/", async (req, res, next) => {
  try {
    const all = await events.read({})
    return res.render("index", { events: all.docs, title: "INDEX" });
  } catch (error) {
    next(error);
  }
});
viewsRouter.use("/events", eventsRouter);
viewsRouter.use("/sessions", sessionsRouter)

export default viewsRouter;
