import { Router } from "express";
import users from "../../data/fs/users.fs.js";

const usersRouter = Router();

usersRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const response = await users.create(data);
    return res.json({
      statusCode: 201,
      response,
    });
  } catch (error) {
    return next(error);
  }
});
usersRouter.get("/", async (req, res, next) => {
  try {
    const all = await users.read();
    return res.json({
      statusCode: 200,
      response: all,
    });
  } catch (error) {
    return next(error);
  }
});
usersRouter.get("/:uid", async (req, res, next) => {
  try {
    const { uid } = req.params;
    const one = await users.readOne(uid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
});
//usersRouter.put("/:eid", async(req,res,next)=>{})
//usersRouter.delete("/:eid", async (req, res, next) => {});

export default usersRouter;
