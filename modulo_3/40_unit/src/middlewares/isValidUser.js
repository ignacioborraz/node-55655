import UsersService from "../services/users.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      CustomError.newError(errors.incomplete);
    } else {
      const user = await new UsersService().getUserByEmail(email, next);
      if (!user) {
        CustomError.newError(errors.auth);
      }
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
