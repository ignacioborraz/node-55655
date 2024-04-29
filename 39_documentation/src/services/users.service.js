import UsersRepository from "../repository/users.repository.js";

export default class UsersService {
  constructor() {
    this.repository = new UsersRepository();
  }
  create = async (data) => {
    try {
      return await this.repository.create(data);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  getAll = async (queries) => {
    try {
      return await this.repository.getAll(queries);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  getBy = async (params) => {
    try {
      return await this.repository.getBy(params);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  getUserByEmail = async (email) => {
    try {
      return await this.repository.getUserByEmail(email);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  getUserById = async (id) => {
    try {
      return await this.repository.getUserById(id);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return await this.repository.update(id, data);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return await this.repository.delete(id);
    } catch (error) {
      error.where = "service";
      throw error;
    }
  };
}
