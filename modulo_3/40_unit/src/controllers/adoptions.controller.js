import AdoptionsService from "../services/adoptions.service.js";
import PetsService from "../services/pets.service.js";
import CustomError from "../config/CustomError.js";
import errors from "../config/errors.js";

const createAdoption = async (req, res, next) => {
  try {
    let { uid, pid } = req.params;
    let adopted = { adopted: true };
    await new PetsService().update(pid, adopted, next);
    let data = { owner: uid, pet: pid };
    let response = await new AdoptionsService().create(data, next);
    return res.status(201).json({ status: "success", payload: response });
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

const getAllAdoptions = async (req, res, next) => {
  try {
    let queries = {
      page: 1,
      limit: 6,
      skip: 0,
    };
    req.query.page && (queries.page = req.query.page);
    req.query.limit && (queries.limit = Number(req.query.limit));
    queries.skip = (queries.page - 1) * queries.limit;
    let response = await new AdoptionsService().getAll(queries, next);
    if (response.adoptions.length > 0) {
      return res.status(200).json({ status: "success", payload: response });
    }
    return CustomError.newError(errors.notFound);
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

const getAdoption = async (req, res, next) => {
  try {
    let { aid } = req.params;
    let response = await new AdoptionsService().getBy(aid, next);
    if (response) {
      return res.status(200).json({ status: "success", payload: response });
    }
    return CustomError.newError(errors.notFoundOne);
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

export { createAdoption, getAllAdoptions, getAdoption };
