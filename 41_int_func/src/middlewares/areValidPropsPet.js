import UsersService from "../services/users.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const { name, specie } = req.body;
    if (!name || !specie) {
      CustomError.newError(errors.incomplete);
    } else {
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
