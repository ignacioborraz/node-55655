import { Router } from "express";

import eventsRouter from "./events.view.js";
import usersRouter from "./users.view.js"

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  try {
    const mainEvents = ["hp", "pokemon", "batman"];
    const date = new Date();
    return res.render("index", { events: mainEvents, date });
  } catch (error) {
    next(error);
  }
});
viewsRouter.use("/events", eventsRouter);
viewsRouter.use("/users", usersRouter)

export default viewsRouter;
