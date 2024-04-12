import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { verifyHash } from "../utils/hash.utils.js";
import { createToken } from "../utils/token.utils.js";
import repository from "../repositories/users.rep.js";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        let one = await repository.readByEmail(email);
        if (one) {
          return done(null, false, { statusCode: 401 });
        } else {
          const user = await repository.create(req.body);
          //console.log(user);
          return done(null, user);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const user = await repository.readByEmail(email);
        const verify = verifyHash(password, user.password);
        if (user?.verified && verify) {
          req.token = createToken({ _id: user._id, role: user.role });
          return done(null, user);
        } else {
          return done(null, false, { statusCode: 401 });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "jwt",
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies["token"],
      ]),
    },
    async (payload, done) => {
      try {
        const user = await repository.readOne(payload._id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, { statusCode: 403 });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
