import MongoManager from "./manager.mongo.js";
import User from "./models/user.model.js";

const users = new MongoManager(User);
export default users;
