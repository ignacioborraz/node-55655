import Adoption from "./models/adoption.model.js";

export default class AdoptionsMongo {
  create = async (data) => {
    try {
      return await Adoption.create(data);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  getAll = async ({ page, skip, limit }) => {
    try {
      let pages = await Adoption.countDocuments();
      pages = Math.ceil(pages / limit);
      let prev = Number(page) === 1 ? null : Number(page) - 1;
      let next = Number(page) === pages ? null : Number(page) + 1;
      let adoptions = await Adoption.find()
        .skip(skip)
        .limit(limit)
        .populate("owner")
        .populate("pet");
      return { prev, next, adoptions };
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  getBy = async (id) => {
    try {
      return await Adoption.findById(id).populate("owner").populate("pet");
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return await Adoption.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return await Adoption.findByIdAndDelete(id);
    } catch (error) {
      error.where = "mongo";
      throw error;
    }
  };
}
