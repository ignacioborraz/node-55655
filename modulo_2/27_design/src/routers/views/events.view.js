import { Router } from "express";

import { events } from "../../data/mongo/manager.mongo.js";

import passCallBack from "../../middlewares/passCallBack.mid.js";
import isAdmin from "../../middlewares/isAdmin.mid.js";

const eventsRouter = Router();

eventsRouter.get("/real", passCallBack("jwt"), isAdmin, (req, res, next) => {
  try {
    return res.render("real", { title: "REAL" });
  } catch (error) {
    next(error);
  }
});

eventsRouter.get("/form", passCallBack("jwt"), isAdmin, (req, res, next) => {
  try {
    return res.render("form", { title: "CREATE MOVIE" });
  } catch (error) {
    next(error);
  }
});

eventsRouter.get("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const one = await events.readOne(eid);
    return res.render("detail", { event: one, title: one.title.toUpperCase() });
  } catch (error) {
    next(error);
  }
});

export default eventsRouter;
