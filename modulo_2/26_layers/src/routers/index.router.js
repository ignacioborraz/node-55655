import CustomRouter from "./CustomRouter.js";
import apiRouter from "./api/index.router.api.js";
import ViewsRouter from "./views/index.view.js";

const views = new ViewsRouter();
const viewsRouter = views.getRouter();
class IndexRouter extends CustomRouter {
  init() {
    this.router.use("/api", apiRouter);
    this.router.use("/", viewsRouter);
  }
}

const router = new IndexRouter();
export default router.getRouter();