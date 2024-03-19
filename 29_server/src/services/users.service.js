import repository from "../repositories/users.rep.js";

class UsersService {
  constructor() {
    this.repository = repository;
  }
  create;
  read;
  readOne;
  readByEmail;
  update;
  destroy;
}

const service = new UsersService();
export default service;
