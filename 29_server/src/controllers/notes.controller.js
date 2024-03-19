import service from "../services/notes.service.js";

class NotesController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {};
  readByUser = async (req, res, next) => {};
}

const controller = new NotesController();
const { create, readByUser } = controller;
export { create, readByUser };
