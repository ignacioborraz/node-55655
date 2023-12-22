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
      return error.message;
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
        throw new Error("Name & Email are required");
      }
      const event = {
        id: crypto.randomBytes(12).toString("hex"),
        name: data.name,
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      this.users.push(event);
      const jsonData = JSON.stringify(this.users, null, 2);
      await fs.promises.writeFile(this.path, jsonData);
      console.log("create " + event.id);
      return event.id;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  readOne(id) {
    try {
      const one = this.users.find((each) => each.id === id);
      if (!one) {
        throw new Error("There isn't any event with id=" + id);
      } else {
        console.log("read " + one);
        return one;
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}

const users = new UsersManager("./data/fs/files/users.json");
export default users;
