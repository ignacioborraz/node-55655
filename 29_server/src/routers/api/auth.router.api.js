import { Router } from "express";
import { register, login, signout } from "../../controllers/auth.controller.js";
import passCallback from "../../middlewares/passCallback.js";

const sessionsRouter = Router();

//register
sessionsRouter.post("/register", passCallback("register"), register);
sessionsRouter.post("/login", passCallback("login"), login);
sessionsRouter.post("/signout", passCallback("jwt"), signout);

export default sessionsRouter;
