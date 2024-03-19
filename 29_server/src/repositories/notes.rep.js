import NoteDTO from "../dto/note.dto.js";
import dao from "../dao/index.dao.js";

const { notes } = dao;

class NotesRep {
  constructor() {
    this.model = notes;
  }
  create;
  read;
  readOne;
  update;
  destroy;
}

const repository = new NotesRep();
export default repository;
