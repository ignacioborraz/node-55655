import { Router } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data/mongo/manager.mongo.js";

export default class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  getRouter() {
    return this.router;
  }
  init() {}
  applyCbs(cbs) {
    return cbs.map((each) => async (...params) => {
      try {
        await each.apply(this, params);
      } catch (error) {
        /* return */ params[1].json({
          statusCode: 500,
          message: error.message,
        });
      }
    });
  }
  responses = (req, res, next) => {
    try {
      res.message = (message) => res.json({ statusCode: 200, message });
      res.success200 = (payload) =>
        res.json({ statusCode: 200, response: payload });
      res.success201 = (payload) =>
        res.json({ statusCode: 201, response: payload });
      res.error400 = (message) => res.json({ statusCode: 400, message });
      res.error401 = () => res.json({ statusCode: 401, message: "Bad auth!" });
      res.error403 = () => res.json({ statusCode: 403, message: "Forbidden!" });
      res.error404 = () => res.json({ statusCode: 404, message: "Not found!" });
      return next();
    } catch (error) {
      return next(error);
    }
  };
  policies = (arrayOfPolicies) => async (req, res, next) => {
    try {
      if (arrayOfPolicies.includes("PUBLIC")) return next();
      let token = req.cookies["token"];
      if (!token) return res.error401();
      else {
        const data = jwt.verify(token, process.env.SECRET);
        if (!data) return res.error400("Bad auth by token!");
        else {
          const { email, role } = data;
          if (
            (role === 0 && arrayOfPolicies.includes("USER")) ||
            (role === 1 && arrayOfPolicies.includes("ADMIN")) ||
            (role === 2 && arrayOfPolicies.includes("PREM"))
          ) {
            const user = await users.readByEmail(email);
            req.user = user;
            return next();
          } else return res.error403();
        }
      }
    } catch (error) {
      return next(error);
    }
  };
  create(path, policies, ...cbs) {
    this.router.post(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  read(path, policies, ...cbs) {
    this.router.get(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  update(path, policies, ...cbs) {
    this.router.put(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  destroy(path, policies, ...cbs) {
    this.router.delete(
      path,
      this.responses,
      this.policies(policies),
      this.applyCbs(cbs)
    );
  }
  use(path, ...cbs) {
    this.router.use(path, this.responses, this.applyCbs(cbs));
  }
}
