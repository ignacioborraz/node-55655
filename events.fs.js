import fs from "fs";
import crypto from "crypto";

class EventsManager {
  static #perGain = 0.3;
  static #totalGain = 0;
  //static para que sea una propiedad de la clase
  //# para que sea una propiedad privada
  init() {
    try {
      const exists = fs.existsSync(this.path);
      //console.log(exists);
      if (!exists) {
        const data = JSON.stringify([], null, 2);
        fs.writeFileSync(this.path, data);
      } else {
        //opcional, para mejora del programa
        this.events = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        //console.log(this.events);
      }
    } catch (error) {
      return error.message;
    }
  }
  constructor(path) {
    this.path = path;
    this.events = [];
    this.init();
  }
  async createEvent(data) {
    try {
      if (!data.name || !data.place) {
        throw new Error("Name & Place are required");
      }
      const event = {
        id: crypto.randomBytes(12).toString("hex"),
        name: data.name,
        place: data.place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      this.events.push(event);
      const jsonData = JSON.stringify(this.events, null, 2);
      //console.log(jsonData);
      await fs.promises.writeFile(this.path, jsonData);
      console.log("create " + event.id);
      return event.id;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  readEvents() {
    try {
      if (this.events.length === 0) {
        throw new Error("There are not events!");
      } else {
        console.log(this.events);
        return this.events;
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  readEventById(id) {
    try {
      const one = this.events.find((each) => each.id === id);
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
  async removeEventById(id) {
    try {
      let one = this.events.find((each) => each.id === id);
      if (!one) {
        throw new Error("There isn't any event with id=" + id);
      } else {
        this.events = this.events.filter((each) => each.id !== id);
        const jsonData = JSON.stringify(this.events, null, 2);
        await fs.promises.writeFile(this.path, jsonData);
        console.log("deleted " + id);
        return id;
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
  async soldticket(quantity, eid) {
    try {
      const one = this.readEventById(eid);
      if (one) {
        if (one.capacity >= quantity) {
          one.capacity = one.capacity - quantity;
          EventsManager.#totalGain =
            EventsManager.#totalGain +
            one.price * quantity * EventsManager.#perGain;
          const jsonData = JSON.stringify(this.events, null, 2);
          await fs.promises.writeFile(this.path, jsonData);
          console.log("capacity available " + one.capacity);
          return one.capacity;
        } else {
          //condicionar en caso de que no haya capacidad en el evento
        }
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}

const events = new EventsManager("./data/fs/files/events.json");
export default events;
