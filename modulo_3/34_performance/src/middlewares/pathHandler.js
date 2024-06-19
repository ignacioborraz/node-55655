import winstonLog from "../utils/logger/index.js";

export default (req, res, next) => {
  winstonLog.WARN(`${req.method} ${req.url} not found path`);
  return res.json({
    statusCode: 404,
    url: `${req.method} ${req.url}`,
    message: `not found path`,
  });
};
