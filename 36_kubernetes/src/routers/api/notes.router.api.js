import {
  create,
  destroy,
  readByUser,
  readOne,
} from "../../controllers/notes.controller.js";
import { Router } from "express";
import passCallback from "../../middlewares/passCallback.js";

const notesRouter = Router();

notesRouter.post("/", passCallback("jwt"), create);
notesRouter.get("/", passCallback("jwt"), readByUser);
notesRouter.get("/:id", passCallback("jwt"), readOne);
notesRouter.delete("/:id", passCallback("jwt"), destroy);

export default notesRouter;
