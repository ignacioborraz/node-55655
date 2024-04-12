import winstonLog from "../utils/logger/index.js";

function wintson(req, res, next) {
  try {
    req.logger = winstonLog;
    const message = `${req.method} ${req.url} - ${(new Date()).toLocaleString()}`;
    req.logger.HTTP(message);
    return next();
  } catch (error) {
    return next(error);
  }
}

export default wintson;
