import MongoManager from "./manager.mongo.js";
import User from "./models/user.model.js";

export default new MongoManager(User);
