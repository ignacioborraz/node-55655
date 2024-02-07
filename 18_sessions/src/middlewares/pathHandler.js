export default (req, res, next) => {
  console.error(`${req.method} ${req.url} not found path`);
  return res.json({
    status: 500,
    message: `${req.method} ${req.url} not found path`,
  });
};
