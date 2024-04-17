import service from "../services/notes.service.js";
import CustomError from "../utils/errors/CustomError.js";
import errors from "../utils/errors/errors.js";
import winston from "../utils/logger/winston.utils.js";

class NotesController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {
    try {
      const data = req.body;
      data.user_id = req.user._id;
      //winston.INFO(JSON.stringify(data));
      await this.service.create(data);
      return res.json({
        statusCode: 201,
        message: "Created!",
      });
    } catch (error) {
      return next(error);
    }
  };
  readByUser = async (req, res, next) => {
    try {
      const filter = {
        user_id: req.user._id,
      };
      const options = {
        limit: req.query.limit || 4,
        page: req.query.page || 1,
      };
      const all = await this.service.read({ filter, options });
      if (all.docs.length > 0) {
        return res.json({
          statusCode: 200,
          response: all,
        });
      } else {
        /*         const error = new Error("Not found!");
        error.statusCode = 404;
        throw error; */
        CustomError.new(errors.notFound);
      }
    } catch (error) {
      return next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      winston.INFO(req.params)
      const one = await this.service.readOne(id);
      if (one) {
        return res.json({
          status: 200,
          response: one,
        });
      } else {
        CustomError.new(errors.notFound);
      }
    } catch (error) {
      return next(error);
    }
  };
  destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      const one = await this.service.destroy(id);
      if (one) {
        return res.json({
          status: 200,
          response: one,
        });
      } else {
        CustomError.new(errors.notFound);
      }
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new NotesController();
const { create, readByUser, readOne, destroy } = controller;
export { create, readByUser, readOne, destroy };
