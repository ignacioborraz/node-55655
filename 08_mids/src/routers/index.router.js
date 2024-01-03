import { Router } from "express";
import apiRouter from "./api/index.router.api.js";

const router = Router()

router.use("/api",apiRouter)
//falta implementar el router vistas

export default router