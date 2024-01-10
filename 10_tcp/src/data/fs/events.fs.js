import fs from "fs";
import crypto from "crypto";

class EventsManager {
  static #perGain = 0.3;
  static #totalGain = 0;
  init() {
    try {
      const exists = fs.existsSync(this.path);
      if (!exists) {
        const data = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, data);
      } else {
        this.events = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      }
    } catch (error) {
      throw error;
    }
  }
  constructor(path) {
    this.path = path;
    this.events = [];
    this.init();
  }
  async createEvent(data) {
    try {
      const event = {
        id: crypto.randomBytes(12).toString("hex"),
        name: data.name,
        poster: data.poster || "https://i.postimg.cc/HxdvTwqJ/events.jpg",
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      this.events.push(event);
      const jsonData = JSON.stringify(this.events, null, 2);
      await fs.promises.writeFile(this.path, jsonData);
      return event.id;
    } catch (error) {
      throw error;
    }
  }
  readEvents() {
    try {
      if (this.events.length === 0) {
        const error = new Error("there aren't events!");
        error.statusCode = 404;
        throw error;
      } else {
        return this.events;
      }
    } catch (error) {
      throw error;
    }
  }
  readEventById(id) {
    try {
      const one = this.events.find((each) => each.id === id);
      if (!one) {
        const error = new Error("there isn't event!");
        error.statusCode = 404;
        throw error;
      } else {
        return one;
      }
    } catch (error) {
      throw error;
    }
  }
  async soldticket(quantity, eid) {
    try {
      const one = this.readEventById(eid);
      if (one.capacity >= quantity) {
        one.capacity = one.capacity - quantity;
        EventsManager.#totalGain =
          EventsManager.#totalGain +
          one.price * quantity * EventsManager.#perGain;
        const jsonData = JSON.stringify(this.events, null, 2);
        await fs.promises.writeFile(this.path, jsonData);
        return one.capacity;
      } else {
        const error = new Error("there aren't capacity");
        error.statusCode = 400;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async removeEventById(id) {
    try {
      this.readEventById(id);
      this.events = this.events.filter((each) => each.id !== id);
      const jsonData = JSON.stringify(this.events, null, 2);
      await fs.promises.writeFile(this.path, jsonData);
      return id;
    } catch (error) {
      throw error;
    }
  }
}

const events = new EventsManager("./src/data/fs/files/events.json");
export default events;
