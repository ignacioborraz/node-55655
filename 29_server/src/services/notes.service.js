import repository from "../repositories/notes.rep.js";

class NotesService {
  constructor() {
    this.repository = repository;
  }
  create;
  read;
  readOne;
  update;
  destroy;
}

const service = new NotesService();
export default service;
