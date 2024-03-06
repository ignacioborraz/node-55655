import CustomRouter from "../CustomRouter.js";

export default class ViewsRouter extends CustomRouter {
  init() {
    this.read("/", ["PUBLIC"], async (req, res, next) => {
      try {
        return res.render("index", {
          title: "INDEX",
        });
      } catch (error) {
        next(error);
      }
    });
  }
}
