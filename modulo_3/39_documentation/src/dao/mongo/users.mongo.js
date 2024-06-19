import User from "./models/user.model.js";
import UserResponseDTO from "../../dto/users.response.dto.js";

export default class UsersMongo {
  create = async (data) => {
    try {
      let result = await User.create(data);
      result = UserResponseDTO.getUserDbFrom(result);
      return result;
    } catch (error) {
      error.where = "persistence";
      throw error;
    }
  };
  getAll = async ({ page, skip, limit }) => {
    try {
      let pages = await User.countDocuments();
      pages = Math.ceil(pages / limit);
      let prev = Number(page) === 1 ? null : Number(page) - 1;
      let next = Number(page) === pages ? null : Number(page) + 1;
      let users = await User.find({}, "-password")
        .skip(skip)
        .limit(limit)
        .sort({ first_name: 1 });
      return { prev, next, users };
    } catch (error) {
      error.where = "persistence";
      throw error;
    }
  };
  getBy = async (params) => {
    try {
      return await User.findOne(params);
    } catch (error) {
      error.where = "persistence";
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      return await User.findByIdAndUpdate(id, { $set: data });
    } catch (error) {
      error.where = "persistence";
      throw error;
    }
  };
  delete = async (id) => {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      error.where = "persistence";
      throw error;
    }
  };
}
