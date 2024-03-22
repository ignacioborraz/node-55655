import CustomRouter from "./CustomRouter.js";
import ApiRouter from "./api/index.router.api.js";
import ViewsRouter from "./views/index.view.js";

const api = new ApiRouter(); //instancia de la clase
const apiRouter = api.getRouter(); //enrutador
const views = new ViewsRouter();
const viewsRouter = views.getRouter();
export default class IndexRouter extends CustomRouter {
  init() {
    this.router.use("/api", apiRouter);
    this.router.use("/", viewsRouter);
  }
}
