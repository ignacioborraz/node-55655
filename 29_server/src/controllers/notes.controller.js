import service from "../services/notes.service.js";

class NotesController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {
    try {
      const data = req.body;
      data.user_id = req.user._id;
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
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      return next(error);
    }
  };
}

const controller = new NotesController();
const { create, readByUser } = controller;
export { create, readByUser };
