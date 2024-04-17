import winstonLog from "../utils/logger/index.js";

export default (error, req, res, next) => {
  if (!error.statusCode || error.statusCode === 500) {
    error.statusCode = 500;
    winstonLog.ERROR(error.message);
  } else {
    winstonLog.WARN(error.message);
  }
  return res.json({
    statusCode: error.statusCode,
    url: `${req.method} ${req.url}`,
    message: error.message,
  });
};
