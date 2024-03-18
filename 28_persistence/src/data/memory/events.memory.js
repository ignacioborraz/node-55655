import crypto from "crypto";
import notFoundOne from "../../utils/notFoundOne.util.js";

class EventsManager {
  static #users = [];

  constructor() {}
  async create(data) {
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
      return event;
    } catch (error) {
      throw error;
    }
  }
  read({ filter, options }) {
    //este metodo para ser compatible con las otras persistencias
    //necesita agregar los filtros
    //y la paginacion/orden
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
  readOne(id) {
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
  async update(eid, data) {
    try {
      const one = this.readOne(eid);
      notFoundOne(one)
      for (let each in data) {
        one[each] = data[each];
      }
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = this.readOne(id);
      notFoundOne(one)
      EventsManager.#users = EventsManager.#users.filter(
        (each) => each.id !== id
      );
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const events = new EventsManager();
export default events;
