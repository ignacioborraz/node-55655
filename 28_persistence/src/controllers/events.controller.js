import service from "../services/events.service.js";

class EventsController {
  constructor() {
    this.service = service;
  }
  create = async (req, res, next) => {
    try {
      const data = req.body;
      const response = await this.service.create(data);
      return res.success201(response);
    } catch (error) {
      return next(error);
    }
  };
  read = async (req, res, next) => {
    try {
      const options = {
        limit: req.query.limit || 8,
        page: req.query.page || 1,
        sort: { title: 1 },
        lean: true,
      };
      const filter = {};
      if (req.query.title) {
        filter.title = new RegExp(req.query.title.trim(), "i");
      }
      if (req.query.sort === "desc") {
        options.sort.title = "desc";
      }
      const all = await this.service.read({ filter, options });
      return res.success200(all);
    } catch (error) {
      return next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const one = await this.service.readOne(eid);
      return res.success200(one);
    } catch (error) {
      return next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const data = req.body;
      const response = await this.service.update(eid, data);
      return res.success200(response);
    } catch (error) {
      return next(error);
    }
  };
  destroy = async (req, res, next) => {
    try {
      const { eid } = req.params;
      const response = await this.service.destroy(eid);
      return res.success200(response);
    } catch (error) {
      return next(error);
    }
  };
}

export default EventsController;
const controller = new EventsController();
const { create, read, readOne, update, destroy } = controller;
export { create, read, readOne, update, destroy };
