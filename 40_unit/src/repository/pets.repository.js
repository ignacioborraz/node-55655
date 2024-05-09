import dao from "../dao/factory.js";
import PetDTO from "../dto/pets.dto.js";

export default class PetsRepository {
  constructor() {
    this.model = new dao.Pet();
  }
  create = async (data) => {
    try {
      data = PetDTO.getPetInputFrom(data);
      return this.model.create(data);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getAll = async (queries) => {
    try {
      return this.model.getAll(queries);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  getBy = async (id) => {
    try {
      return this.model.getBy(id);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return this.model.update(id, data);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return this.model.delete(id);
    } catch (error) {
      error.where = "repository";
      throw error;
    }
  };
}
