import { Router } from "express";
import { createAdoption, getAllAdoptions, getAdoption } from "../controllers/adoptions.controller.js";
import areValidParams from "../middlewares/areValidParams.js";
import isAdopted from "../middlewares/isAdopted.js";
import isAdmin from "../middlewares/isAdmin.js";

const router = Router();

router.post("/:uid/:pid", isAdmin, areValidParams, isAdopted, createAdoption);
router.get("/", getAllAdoptions);
router.get("/:aid", getAdoption);

export default router;
