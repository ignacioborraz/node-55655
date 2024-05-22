import { Router } from "express";
import checkoutController from "../../controllers/payments.controller.js";

const paymentsRouter = Router();

paymentsRouter.post("/checkout", checkoutController);

export default paymentsRouter;
