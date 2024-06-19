import { Router } from "express";
import apiRouter from "./api/index.router.api.js";
import sendSms from "../utils/sendSms.utils.js";

const router = Router();
router.use("/api", apiRouter);
/* router.get("/sms", async (req, res, next) => {
  try {
    await sendSms("+543412596847");
    return res.json({
      statusCode: 200,
      message: "enviado",
    });
  } catch (error) {
    return next(error);
  }
}); */

export default router;
