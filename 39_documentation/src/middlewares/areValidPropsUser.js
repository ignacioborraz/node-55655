import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const { first_name, email, password } = req.body;
    if (!first_name || !email || !password) {
      CustomError.newError(errors.incomplete);
    } else {
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
