import { create, readByUser } from "../../controllers/notes.controller.js";
import { Router } from "express";
import passCallback from "../../middlewares/passCallback.js";

const notesRouter = Router();

notesRouter.post("/", passCallback("jwt"),create);
notesRouter.get("/", passCallback("jwt"), readByUser);

export default notesRouter;
