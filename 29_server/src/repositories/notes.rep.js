import NoteDTO from "../dto/note.dto.js";
import dao from "../dao/index.dao.js";

const { notes } = dao;

class NotesRep {
  constructor() {
    this.model = notes;
  }
  create = async (data) => await this.model.create(new NoteDTO(data));
  read = async ({ filter, options }) => await this.model.read({ filter, options });
  readOne = async (id) => await this.model.readOne(id);
  update = async (id, data) => await this.model.update(id, data);
  destroy = async (id) => await this.model.destroy(id);
}

const repository = new NotesRep();
export default repository;
