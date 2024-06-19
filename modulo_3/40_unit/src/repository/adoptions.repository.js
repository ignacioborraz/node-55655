import dao from "../dao/factory.js";

export default class AdoptionsRepository {
  constructor() {
    this.model = new dao.Adoption();
  }
  create = async (data) => {
    try {
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
  getBy = async (id) => {
    try {
      return await this.model.getBy(id);
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
