import { Router } from "express";
import { getAllUsers, updateUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.put("/:uid", updateUser);
router.delete("/:uid", deleteUser);

export default router;
