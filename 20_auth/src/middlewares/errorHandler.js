export default (error, req, res, next) => {
  console.error(error);
  return res.status(error.statusCode || 500).json({
    statusCode: error.statusCode || 500,
    url: `${req.method} ${req.url}`,
    message: error.message,
  });
};
