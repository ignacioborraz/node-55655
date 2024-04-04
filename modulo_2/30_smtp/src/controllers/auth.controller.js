import service from "../services/users.service.js";

class AuthController {
  constructor() {
    this.service = service;
  }
  register = async (req, res, next) => {
    const { email, name, verifiedCode } = req.user;
    await this.service.register({ email, name, verifiedCode });
    try {
      return res.json({
        statusCode: 201,
        message: "Registered!",
      });
    } catch (error) {
      return next(error);
    }
  };
  login = async (req, res, next) => {
    try {
      return res
        .cookie("token", req.token, {
          maxAge: 60 * 60 * 24 * 7,
          httpOnly: true,
        })
        .json({
          statusCode: 200,
          message: "Logged in!",
        });
    } catch (error) {
      return next(error);
    }
  };
  signout = async (req, res, next) => {
    try {
      return res.clearCookie("token").json({
        statusCode: 200,
        message: "Signed out!",
      });
    } catch (error) {
      return next(error);
    }
  };
  verifyAccount = async (req, res, next) => {
    try {
      const { email, verifiedCode } = req.body;
      const user = await service.readByEmail(email);
      if (user.verifiedCode === verifiedCode) {
        await service.update(user._id, { verified: true });
        return res.json({
          statusCode: 200,
          message: "Verified user!",
        });
      } else {
        return res.json({
          statusCode: 400,
          message: "Invalid verified token!",
        });
      }
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new AuthController();
const { register, login, signout, verifyAccount } = controller;
export { register, login, signout, verifyAccount };
