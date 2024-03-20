import dbConnection from "../utils/db.utils.js";
const persistence = process.env.PERSISTENCE || "MONGO";

let dao = {};

switch (persistence) {
  case "MEMORY":
    break;
  case "FS":
    break;
  default:
    dbConnection();
    const { default: NotesMongo } = await import("./mongo/notes.mongo.js");
    const { default: UsersMongo } = await import("./mongo/users.mongo.js");
    dao = { notes: NotesMongo, users: UsersMongo };
    break;
}

export default dao;
