import crypto from "crypto";

class UsersManager {
  static #users = [];
  constructor() {}
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
      UsersManager.#users.push(user);
      return user.id;
    } catch (error) {
      throw error;
    }
  }
  read() {
    try {
      if (UsersManager.#users.length === 0) {
        const error = new Error("NOT FOUND!");
        error.statusCode = 404;
        throw error;
      } else {
        return UsersManager.#users;
      }
    } catch (error) {
      throw error;
    }
  }
  readOne(id) {
    try {
      const one = UsersManager.#users.find((each) => each.id === id);
      if (!one) {
        const error = new Error("NOT FOUND!");
        error.statusCode = 404;
        throw error;
      } else {
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async update(uid, data) {
    try {
      const one = UsersManager.#users.readOne(uid);
      if (one) {
        for (let each in data) {
          one[each] = data[each];
        }
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = this.readOne(id);
      if (one) {
        UsersManager.#users = UsersManager.#users.filter(
          (each) => each.id !== id
        );
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const users = new UsersManager();
export default { users };
