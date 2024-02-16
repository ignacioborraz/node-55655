import { Router } from "express";
import apiRouter from "./api/index.router.api.js";
import viewsRouter from "./views/index.view.js";

const router = Router();

router.use("/api", apiRouter);
router.use("/", viewsRouter);

export default router;
