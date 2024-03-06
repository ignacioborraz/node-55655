import CustomRouter from "../CustomRouter.js";
import passCallBackMid from "../../middlewares/passCallBack.mid.js";

export default class SessionsRouter extends CustomRouter {
  init() {
    this.create(
      "/register",
      ["PUBLIC"],
      passCallBackMid("register"),
      async (req, res, next) => {
        try {
          return res.message("Registered!");
        } catch (error) {
          return next(error);
        }
      }
    );
    this.create(
      "/login",
      ["PUBLIC"],
      passCallBackMid("login"),
      async (req, res, next) => {
        try {
          return res
            .cookie("token", req.token, {
              maxAge: 7 * 24 * 60 * 60 * 1000,
              httpOnly: true,
            })
            .message("Logged in!");
        } catch (error) {
          return next(error);
        }
      }
    );
    this.create("/signout", ["USER"], async (req, res, next) => {
      try {
        return res.clearCookie("token").message("Signed out!");
      } catch (error) {
        return next(error);
      }
    });
  }
}
