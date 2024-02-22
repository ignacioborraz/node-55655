import { Router } from "express";
import { events } from "../../data/mongo/manager.mongo.js";

const eventsRouter = Router();

eventsRouter.get("/real", (req, res, next) => {
  try {
    return res.render("real", { title: "REAL" });
  } catch (error) {
    next(error);
  }
});

eventsRouter.get("/form", async (req, res, next) => {
  try {
    return res.render("form");
  } catch (error) {
    next(error);
  }
});

eventsRouter.get("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const one = await events.readOne(eid);
    return res.render("detail", { event: one });
  } catch (error) {
    next(error);
  }
});

export default eventsRouter;
