import fs from "fs";
import crypto from "crypto";

class UsersManager {
  init() {
    try {
      const exists = fs.existsSync(this.path);
      if (!exists) {
        const data = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, data);
      } else {
        this.users = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      }
    } catch (error) {
      throw error;
    }
  }
  constructor(path) {
    this.path = path;
    this.users = [];
    this.init();
  }
  async create(data) {
    try {
      if (!data.name || !data.email) {
        const error = new Error("name & email are required");
        error.statusCode = 400;
        throw error;
      }
      const user = {
        id: crypto.randomBytes(12).toString("hex"),
        name: data.name,
        email: data.email,
        photo: data.photo || "https://i.postimg.cc/wTgNFWhR/profile.png",
      };
      this.users.push(user);
      const jsonData = JSON.stringify(this.users, null, 2);
      await fs.promises.writeFile(this.path, jsonData);
      return user.id;
    } catch (error) {
      throw error;
    }
  }
  read() {
    try {
      if (this.users.length === 0) {
        const error = new Error("there aren't users!");
        error.statusCode = 404;
        throw error;
      } else {
        return this.users;
      }
    } catch (error) {
      throw error;
    }
  }
  readOne(id) {
    try {
      const one = this.users.find((each) => each.id === id);
      if (!one) {
        const error = new Error("there isn't user!");
        error.statusCode = 404;
        throw error;
      } else {
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
}

const users = new UsersManager("./src/data/fs/files/users.json");
export default users;
