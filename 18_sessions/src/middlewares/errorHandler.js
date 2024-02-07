export default (error, req, res, next) => {
  console.error(error);
  return res.status(error.statusCode || 500).json({
    statusCode: error.statusCode || 500,
    message: `${req.method} ${req.url} ${error.message}`,
  });
};
