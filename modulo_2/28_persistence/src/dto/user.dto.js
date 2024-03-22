import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

class UserDTO {
  constructor(data) {
    argsUtil.env !== "prod" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.lastName = data.lastName;
    this.photo = data.photo || "https://i.postimg.cc/wTgNFWhR/profile.png";
    this.age = data.age || 18;
    this.role = data.role || 0;
    argsUtil.env !== "prod" && (this.updatedAt = new Date());
    argsUtil.env !== "prod" && (this.createdAt = new Date());
  }
}

export default UserDTO;
