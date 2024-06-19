import UsersService from "../services/users.service.js";
import PetsService from "../services/pets.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

export default async (req, res, next) => {
  try {
    const { uid, pid } = req.params;
    const user = await new UsersService().getUserById(uid, next);
    const pet = await new PetsService().getBy(pid, next);
    if (!user || !pet) {
      CustomError.newError(errors.invalid);
    } else {
      req.pet = pet;
      req.user = user;
      return next();
    }
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
