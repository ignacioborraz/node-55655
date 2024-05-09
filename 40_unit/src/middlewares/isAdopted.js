import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    if (req.pet.adopted) {
      CustomError.newError(errors.adopted);
    } else {
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
