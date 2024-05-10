import UsersService from "../services/users.service.js";
import { passwordValidation } from "../config/hash.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const user = await new UsersService().getUserByEmail(req.body.email, next);
    const password = req.body.password
    const isValidPassword = await passwordValidation(user, password);
    if (!isValidPassword) {
      CustomError.newError(errors.auth);
    } else {
      user.password = null
      req.user = user
      return next()
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
