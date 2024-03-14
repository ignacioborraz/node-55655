import crypto from "crypto";

class EventsManager {
  static #users = [];

  constructor() {}
  async createEvent(data) {
    try {
      const event = {
        id: crypto.randomBytes(12).toString("hex"),
        title: data.title,
        poster: data.poster || "https://i.postimg.cc/HxdvTwqJ/events.jpg",
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventsManager.#users.push(event);
      return event.id;
    } catch (error) {
      throw error;
    }
  }
  readEvents() {
    try {
      if (EventsManager.#users.length === 0) {
        const error = new Error("NOT FOUND!");
        error.statusCode = 404;
        throw error;
      } else {
        return EventsManager.#users;
      }
    } catch (error) {
      throw error;
    }
  }
  readEventById(id) {
    try {
      const one = EventsManager.#users.find((each) => each.id === id);
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
  async updateEvent(eid, data) {
    try {
      const one = EventsManager.#users.readEventById(eid);
      for (let each in data) {
        one[each] = data[each];
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
  async removeEventById(id) {
    try {
      this.readEventById(id);
      EventsManager.#users = EventsManager.#users.filter(
        (each) => each.id !== id
      );
      return id;
    } catch (error) {
      throw error;
    }
  }
}

const events = new EventsManager();
export default { events };
