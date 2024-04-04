import CustomRouter from "./CustomRouter.js";
import ApiRouter from "./api/index.router.api.js";
import ViewsRouter from "./views/index.view.js";

const api = new ApiRouter();
const views = new ViewsRouter();

export default class IndexRouter extends CustomRouter {
  init() {
    this.use("/api", api.getRouter());
    this.use("/", views.getRouter());
  }
}
