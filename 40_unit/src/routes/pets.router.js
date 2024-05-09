import { Router } from "express";
import {
  createPet,
  createPetWithImage,
  getAllPets,
  getOne,
  updatePet,
  deletePet,
} from "../controllers/pets.controller.js";
import uploader from "../config/uploader.js";
import isAdmin from "../middlewares/isAdmin.js";
import areValidPropsPet from "../middlewares/areValidPropsPet.js";

const router = Router();

router.post("/", isAdmin, areValidPropsPet, createPet);
router.post(
  "/withimage",
  isAdmin,
  areValidPropsPet,
  uploader.single("image"),
  createPetWithImage
);
router.get("/", getAllPets);
router.get("/:pid", getOne);
router.put("/:pid", isAdmin, updatePet);
router.delete("/:pid", isAdmin, deletePet);

export default router;
