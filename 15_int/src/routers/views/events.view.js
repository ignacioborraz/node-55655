import { Router } from "express";
import events from "../../data/fs/events.fs.js";

const eventsRouter = Router();

eventsRouter.get("/real", (req, res, next) => {
  try {
    return res.render("real", { title: "REAL" });
  } catch (error) {
    next(error);
  }
});

export default eventsRouter;
