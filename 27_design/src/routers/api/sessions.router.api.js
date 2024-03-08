import CustomRouter from "../CustomRouter.js";
import passport from "../../middlewares/passport.mid.js";
import passCallBack from "../../middlewares/passCallBack.mid.js";
import {
  register,
  login,
  google,
  github,
  me,
  signout,
  badauth,
} from "../../controllers/sessions.controller.js";

class SessionsRouter extends CustomRouter {
  init() {
    this.create("/register", ["PUBLIC"], passCallBack("register"), register);
    this.create("/login", ["PUBLIC"], passCallBack("login"), login);
    this.create(
      "/google",
      ["PUBLIC"],
      passport.authenticate("google", { scope: ["email", "profile"] })
    );
    this.read(
      "/google/callback",
      ["PUBLIC"],
      passport.authenticate("google", {
        session: false,
        failureRedirect: "/api/sessions/badauth",
      }),
      google
    );
    this.create(
      "/github",
      ["PUBLIC"],
      passport.authenticate("github", { scope: ["email", "profile"] })
    );
    this.read(
      "/github/callback",
      ["PUBLIC"],
      passport.authenticate("github", {
        session: false,
        failureRedirect: "/api/sessions/badauth",
      }),
      github
    );
    this.create("/", ["USER", "ADMIN", "PREM"], me);
    this.create("/signout", ["USER", "ADMIN", "PREM"], signout);
    this.read("/badauth", ["PUBLIC"], badauth);
  }
}

let sessionsRouter = new SessionsRouter();
export default sessionsRouter.getRouter();
