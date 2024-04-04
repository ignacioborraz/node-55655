import has8charUtils from "../utils/has8char.util.js";

function has8char(req, res, next) {
  try {
    const { password } = req.body;
    has8charUtils(password);
    return next();
  } catch (error) {
    return next(error);
  }
}

export default has8char;
