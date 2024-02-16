import { Router } from "express";

import { events } from "../../data/mongo/manager.mongo.js";
import eventsRouter from "./events.view.js";
import sessionsRouter from "./sessions.view.js";

const viewsRouter = Router();

viewsRouter.get("/", async (req, res, next) => {
  try {
    const options = {
      limit: req.query.limit || 4,
      page: req.query.page || 1,
      sort: { title: 1 },
    };
    const filter = {};
    if (req.query.title) {
      filter.title = new RegExp(req.query.title.trim(), "i");
    }
    if (req.query.sort === "desc") {
      options.sort.title = "desc";
    }
    const all = await events.read({ filter, options });
    return res.render("index", {
      events: all.docs,
      next: all.nextPage,
      prev: all.prevPage,
      title: "INDEX",
      filter: req.query.title,
    });
  } catch (error) {
    next(error);
  }
});
viewsRouter.use("/events", eventsRouter);
viewsRouter.use("/sessions", sessionsRouter);

export default viewsRouter;
