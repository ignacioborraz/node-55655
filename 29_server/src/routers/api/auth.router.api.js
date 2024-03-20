import { Router } from "express";
import { register, login, signout } from "../../controllers/auth.controller.js";
import passCallback from "../../middlewares/passCallback.js";

const authrouter = Router();

authrouter.post("/register", passCallback("register"), register);
authrouter.post("/login", passCallback("login"), login);
authrouter.post("/signout", passCallback("jwt"), signout);

export default authrouter;
