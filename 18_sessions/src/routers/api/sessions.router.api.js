import { Router } from "express";

const sessionsRouter = Router();

//login
sessionsRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email && password === "hola1234") {
      req.session.email = email;
      //el role se está hardcodeando, pero luego hay que buscarlo en mongo
      //para saber el role real del usuario que inició sesión
      req.session.role = "user"
      return res.json({
        statusCode: 200,
        message: "Logged in!",
        session: req.session,
      });
    }
    const error = new Error("Bad Auth");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
});

//me
sessionsRouter.post("/", async (req, res, next) => {
  try {
    if (req.session.email) {
      return res.json({
        statusCode: 200,
        message: "Session with email: " + req.session.email,
      });
    } else {
      const error = new Error("No Auth");
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
});

//signout
sessionsRouter.post("/signout", async (req, res, next) => {
  try {
    if (req.session.email) {
      req.session.destroy();
      return res.json({
        statusCode: 200,
        message: "Signed out!",
      });
    } else {
      const error = new Error("No Auth");
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
});

export default sessionsRouter;
