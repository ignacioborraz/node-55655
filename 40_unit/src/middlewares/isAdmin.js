import jwt from "jsonwebtoken"
import errors from "../config/errors.js"
import CustomError from "../config/CustomError.js"

export default async (req,res,next) => {
  try {
    const cookie = req.cookies['token']
    if (cookie) {
      const user = jwt.verify(cookie,process.env.JWT)
      if (user.role === "admin") {
        return next()
      }
      let forbidden = errors.forbidden
      forbidden.where = "middleware"
      return CustomError.newError(forbidden)
    }
    let auth = errors.auth
    auth.where = "middleware"
    return CustomError.newError(auth)
  } catch (error) {
    error.where = "middleware";
    return next(error)
  }
}