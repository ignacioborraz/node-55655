import CustomRouter from "../CustomRouter.js";
import { clothes } from "../../data/mongo/manager.mongo.js";

class ClothesRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN", "PREM"], async (req, res, next) => {
      try {
        const data = req.body;
        const response = await clothes.create(data);
        return res.success201(response);
      } catch (error) {
        return next(error);
      }
    });
    //this.read();
    //this.read();
    //this.update();
    //this.destroy();
  }
}

export default ClothesRouter;
