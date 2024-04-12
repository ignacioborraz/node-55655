import { Router } from "express";
import apiRouter from "./api/index.router.api.js";
import sendSms from "../utils/sendSms.utils.js";

const router = Router();
router.use("/api", apiRouter);
router.get("/simplex", (req, res, next) => {
  try {
    let total = 1;
    for (let i = 1; i < 100; i++) {
      total = i * i;
    }
    return res.send({ total });
  } catch (error) {
    return next(error);
  }
});
router.get("/complex", (req, res, next) => {
  try {
    let total = 1;
    for (let i = 1; i < 1000000000; i++) {
      total = i * i;
    }
    return res.send({ total });
  } catch (error) {
    return next(error);
  }
});

export default router;
