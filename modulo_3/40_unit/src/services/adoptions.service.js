import AdoptionsRepository from "../repository/adoptions.repository.js";

export default class AdoptionsService {
  constructor() {
    this.repository = new AdoptionsRepository();
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
  getBy = async (id) => {
    try {
      return await this.repository.getBy(id);
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
