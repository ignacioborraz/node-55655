import { Router } from "express";
//import events from "../../data/fs/events.fs.js";
import { events } from "../../data/mongo/manager.mongo.js";
import propsEvents from "../../middlewares/propsEvents.mid.js";
import isAdmin from "../../middlewares/isAdmin.mid.js";
import isCapacityOkMid from "../../middlewares/isCapacityOk.mid.js";

const eventsRouter = Router();

eventsRouter.post("/", /* isAdmin, */ propsEvents, async (req, res, next) => {
  try {
    const data = req.body;
    const response = await events.create(data);
    return res.json({
      statusCode: 201,
      response,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.get("/", async (req, res, next) => {
  try {
    const options = {
      limit: req.query.limit || 20,
      page: req.query.page || 1,
      sort: { name: 1 },
    };
    const filter = {};
    if (req.query.name) {
      filter.name = new RegExp(req.query.name.trim(), "i");
    }
    if (req.query.sort === "desc") {
      options.sort.name = "desc";
    }
    const all = await events.read({ filter, options });
    return res.json({
      statusCode: 200,
      response: all,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.get("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const one = await events.readOne(eid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.put("/:eid", isCapacityOkMid, async (req, res, next) => {
  try {
    const { eid } = req.params;
    const data = req.body
    const response = await events.update(eid, data);
    return res.json({
      statusCode: 200,
      response: response,
    });
  } catch (error) {
    return next(error);
  }
});

eventsRouter.delete("/:eid", async (req, res, next) => {
  try {
    const { eid } = req.params;
    const response = await events.destroy(eid);
    return res.json({
      statusCode: 200,
      response,
    });
  } catch (error) {
    return next(error);
  }
});

export default eventsRouter;
