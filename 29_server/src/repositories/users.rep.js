import UserDTO from "../dto/user.dto.js";
import dao from "../dao/index.dao.js";

const { users } = dao;

class UsersRep {
  constructor() {
    this.model = users;
  }
  create;
  read;
  readOne;
  readByEmail;
  update;
  destroy;
}

const repository = new UsersRep();
export default repository;
