import dao from "../dao/factory.js";
import UserDTO from "../dto/users.dto.js";

export default class UsersRepository {
  constructor() {
    this.model = new dao.User();
  }
  create = async (data) => {
    try {
      data = await UserDTO.getUserInputFrom(data);
      return await this.model.create(data);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getAll = async (queries) => {
    try {
      return await this.model.getAll(queries);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getBy = async (params) => {
    try {
      return await this.model.getBy(params);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getUserByEmail = async (email) => {
    try {
      return await this.model.getBy({ email });
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getUserById = async (id) => {
    try {
      return await this.model.getBy({ _id: id });
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return await this.model.update(id, data);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return await this.model.delete(id);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
}
