import UsersService from "../services/users.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const exists = await new UsersService().getUserByEmail(
      req.body.email,
      next
    );
    console.log(req.body);
    if (exists) {
      CustomError.newError(errors.auth);
    } else {
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
