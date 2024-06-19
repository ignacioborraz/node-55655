import { Router } from "express";
import { register, login, signout, online } from "../controllers/sessions.controller.js";
import isValidadEmail from "../middlewares/isValidadEmail.js";
import areValidProps from "../middlewares/areValidPropsUser.js";
import isValidUser from "../middlewares/isValidUser.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import createToken from "../middlewares/createToken.js";
import isUser from "../middlewares/isUser.js";

const router = Router();

router.post("/register", isValidadEmail, areValidProps, register);
router.post("/login", isValidUser, isValidPassword, createToken, login);
router.post("/signout", isUser, signout);
router.post("/online", isUser, online);

export default router;
