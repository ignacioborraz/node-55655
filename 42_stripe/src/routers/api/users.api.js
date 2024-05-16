import { Router } from "express";
//import usersManager from "../../data/fs/UsersManager.fs.js";
import usersManager from "../../data/mongo/UsersManager.mongo.js";
import isPhoto from '../../middlewares/isPhoto.js';
import uploader from "../../middlewares/multer.mid.js";

const usersRouter = Router();

usersRouter.get("/", read);
usersRouter.get("/:uid", readOne);
usersRouter.post("/", uploader.single("photo"), isPhoto, create);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);

async function create(req, res, next) {
  try {
    const data = req.body;
    const one = await usersManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return next(error);
  }
}

async function read(req, res, next) {
  try {
    const { role } = req.query;
    const all = await usersManager.read(role);
    if (all.length > 0) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function readOne(req, res, next) {
  try {
    const { uid } = req.params;
    const one = await usersManager.readOne(uid);
    if (one) {
      return res.json({
        statusCode: 200,
        response: one,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const { uid } = req.params;
    const data = req.body;
    const one = await usersManager.update(uid, data);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { uid } = req.params;
    const one = await usersManager.destroy(uid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

export default usersRouter;
