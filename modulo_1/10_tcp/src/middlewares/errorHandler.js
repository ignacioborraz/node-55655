const errorHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    status: 500,
    message: `${req.method} ${req.url} ${error.message}`,
  });
};

export default errorHandler;
