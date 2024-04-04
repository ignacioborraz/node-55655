import CustomRouter from "../CustomRouter.js";
//import events from "../../data/fs/events.fs.js";
import { events } from "../../data/mongo/manager.mongo.js";
import isAdmin from "../../middlewares/isAdmin.mid.js";
import passCallBackMid from "../../middlewares/passCallBack.mid.js";

export default class EventsRouter extends CustomRouter {
  init() {
    this.create(
      "/",
      ["ADMIN","PREM"],
      passCallBackMid("jwt"),
      isAdmin,
      async (req, res, next) => {
        try {
          const data = req.body;
          const response = await events.create(data);
          //return res.json({ statusCode: 201, response });
          return res.success201(response);
        } catch (error) {
          return next(error);
        }
      }
    );

    this.read("/", ["PUBLIC"], async (req, res, next) => {
      try {
        const options = {
          limit: req.query.limit || 20,
          page: req.query.page || 1,
          sort: { title: 1 },
          lean: true,
        };
        const filter = {};
        if (req.query.title) {
          filter.title = new RegExp(req.query.title.trim(), "i");
        }
        if (req.query.sort === "desc") {
          options.sort.title = "desc";
        }
        const all = await events.read({ filter, options });
        return res.success200(all);
      } catch (error) {
        return next(error);
      }
    });

    this.read("/:eid", ["PUBLIC"], async (req, res, next) => {
      try {
        const { eid } = req.params;
        const one = await events.readOne(eid);
        return res.success200(one);
      } catch (error) {
        return next(error);
      }
    });

    this.update("/:eid", ["ADMIN","PREM"], async (req, res, next) => {
      try {
        const { eid } = req.params;
        const data = req.body;
        const response = await events.update(eid, data);
        return res.success200(response);
      } catch (error) {
        return next(error);
      }
    });

    this.destroy("/:eid", ["ADMIN","PREM"], async (req, res, next) => {
      try {
        const { eid } = req.params;
        const response = await events.destroy(eid);
        return res.success200(response);
      } catch (error) {
        return next(error);
      }
    });
  }
}
