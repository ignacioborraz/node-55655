import TokenDTO from "../dto/token.dto.js";
import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  try {
    const userDto = TokenDTO.getUserTokenFrom(req.user);
    const token = jwt.sign(userDto, process.env.JWT, { expiresIn: "1h" });
    req.token = token;
    return next();
  } catch (error) {
    error.where = "middleware";
    return next(error);
  }
};
