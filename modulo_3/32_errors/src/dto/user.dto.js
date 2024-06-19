import crypto from "crypto";
import { createHash } from "../utils/hash.utils.js";

class UserDTO {
  constructor(data) {
    process.env.PERSISTENTE !== "MONGO" && (this._id = crypto.randomBytes(12).toString("hex"));
    this.name = data.name;
    this.email = data.email;
    this.password = createHash(data.password);
    this.role = data.role || "USER";
    this.verified = data.verified || false;
    this.verifiedCode = crypto.randomBytes(12).toString("base64")
    process.env.PERSISTENTE !== "MONGO" && (this.createdAt = new Date());
    process.env.PERSISTENTE !== "MONGO" && (this.updatedAt = new Date());
  }
}

export default UserDTO;
