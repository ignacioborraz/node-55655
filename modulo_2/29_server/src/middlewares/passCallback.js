import passport from "./passport.js";

export default (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      //console.log({ err, user, info });
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({
          statusCode: info.statusCode || 400,
          message: info.message || "Bad auth!",
        });
      }
      req.user = user;
      return next();
    })(req, res, next);
  };
};
