import propsEventsUtils from "../utils/propsEvents.utils.js";

function propsEvents(req, res, next) {
/*   const { name, place } = req.body;
  if (!name || !place) {
    const error = new Error(`name & place are required`);
    error.statusCode = 404;
    throw error;
  } else {
    return next();
  } */
  try {
    propsEventsUtils(req.body)
    return next()
  } catch (error) {
    return next(error)
  }
}

export default propsEvents;
