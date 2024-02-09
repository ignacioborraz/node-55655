import { events } from "../data/mongo/manager.mongo.js";

export default async (req, res, next) => {
  try {
    const { eid } = req.params;
    const { quantity } = req.body;
    const one = await events.readOne(eid);
    if (!quantity || one.capacity >= quantity) {
      one.capacity = one.capacity - quantity;
      await one.save();
      return next();
    } else {
      const error = new Error("there is no capacity available");
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};
