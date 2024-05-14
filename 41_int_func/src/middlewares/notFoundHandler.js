export default (req, res, next) => {
  let status = "error";
  let from = `${req.method} ${req.url}`;
  let message = "Not found endpoint";
  return res.status(404).json({ status, from, message });
};
