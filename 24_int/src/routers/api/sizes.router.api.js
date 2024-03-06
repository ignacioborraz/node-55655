import CustomRouter from "../CustomRouter.js";
import { sizes } from "../../data/mongo/manager.mongo.js";

class SizeRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN", "PREM"], async (req, res, next) => {
      try {
        const data = req.body;
        const response = await sizes.create(data);
        return res.success201(response);
      } catch (error) {
        return next(error);
      }
    });

    this.read("/", ['PUBLIC'], async (req, res, next) => {
      try {
        const response = await sizes.read({});
        return res.success200(response);
      } catch (error) {
        return next(error)
      }
    });

    this.read("/:sid", ['PUBLIC'], async (req, res, next) => {
      try {
        const { sid } = req.params;
        const response = await sizes.readOne(sid);
        return res.success200(response);
      } catch (error) {
        return next(error)
      }
    });

    this.update("/:sid", ["ADMIN", "PREM"], async (req, res, next) => {
      try {
        const { sid } = req.params;
        const data = req.body;
        const response = await sizes.update(sid, data);
        return res.success200(response);
      } catch (error) {
        return next(error)
      }
    });

    this.destroy("/:sid", ["ADMIN", "PREM"], async (req, res, next) => {
      try {
        const { sid } = req.params;
        const response = await sizes.destroy(sid);
        return res.success200(response);
      } catch (error) {
        return next(error)
      }
    });
  }
}

export default SizeRouter;
