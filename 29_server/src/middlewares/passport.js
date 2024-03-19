import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { createHash, verifyHash } from "../utils/hash.utils.js";
import { createToken } from "../utils/token.utils.js";
import dao from "../dao/index.dao.js";

const { users } = dao;

passport.use("register", new LocalStrategy());
passport.use("login", new LocalStrategy());
passport.use("jwt", new JwtStrategy());

export default passport;
