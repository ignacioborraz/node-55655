import UserDTO from "../dto/user.dto.js";
import dao from "../dao/index.dao.js";

const { users } = dao;

class UsersRep {
  constructor() {
    this.model = users;
  }
  create = async (data) => await this.model.create(new UserDTO(data));
  read = async ({ filter, options }) => await this.model.read({ filter, options });
  readOne = async (id) => await this.model.readOne(id);
  readByEmail = async (email) => await this.model.readByEmail(email);
  update = async (id, data) => await this.model.update(id, data);
  destroy = async (id) => await this.model.destroy(id);
}

const repository = new UsersRep();
export default repository;
