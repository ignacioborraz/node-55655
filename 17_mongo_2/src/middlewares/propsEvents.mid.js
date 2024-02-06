import propsEventsUtils from "../utils/propsEvents.utils.js";

export default (req, res, next) => {
  try {
    propsEventsUtils(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};
