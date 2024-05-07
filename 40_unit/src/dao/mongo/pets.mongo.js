import Pet from "./models/pet.model.js";

export default class PetsMongo {
  create = async (data) => {
    try {
      return await Pet.create(data);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  getAll = async ({ page, skip, limit, adopted }) => {
    try {
      let pages = await Pet.countDocuments({ adopted: false });
      pages = Math.ceil(pages / limit);
      let prev = Number(page) === 1 ? null : Number(page) - 1;
      let next = Number(page) === pages ? null : Number(page) + 1;
      let pets = await Pet.find({ adopted })
        .skip(skip)
        .limit(limit)
        .sort({ name: 1 });
      return { prev, next, pets };
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  getBy = async (id) => {
    try {
      return await Pet.findById(id);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return await Pet.findByIdAndUpdate(id, data);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return await Pet.findByIdAndDelete(id);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
}
