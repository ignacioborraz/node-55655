import jwt from "jsonwebtoken";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const cookie = req.cookies["token"];
    if (cookie) {
      const user = jwt.verify(cookie, process.env.JWT);
      if (user) {
        req.user = user
        return next();
      }
    }
    CustomError.newError(errors.auth);
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
