async function isValidAdmin(req, res, next) {
  try {
    const { role } = req.session;
    if (role === 1) {
      return next();
    }
    const error = new Error("Forbidden");
    error.statusCode = 403;
    throw error;
  } catch (error) {
    return next(error);
  }
}

export default isValidAdmin;
