const fs = require("fs");

class EventsFs {
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor(path) {
    this.path = path;
    this.events = [];
    this.init();
  }
  init() {
    const file = fs.existsSync(this.path);
    if (file) {
      this.events = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    } else {
      fs.writeFileSync(this.path, JSON.stringify([], null, 2));
    }
  }
  async createEvent({ name, place, ...data }) {
    try {
      if (!name || !place) {
        throw new Error("Please, insert name & place");
        //VA A ACTIVAR EL CATCH (MANEJADOR DE ERRORES)
      }
      const event = {
        id:
          this.events.length === 0
            ? 1
            : this.events[this.events.length - 1].id + 1,
        name,
        place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      this.events.push(event);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.events, null, 2)
      );
      return true;
    } catch (error) {
      return error.message;
    }
  }
  readEvents() {
    try {
      if (this.events.length === 0) {
        throw new Error("Not found events!");
      } else {
        return this.events;
      }
    } catch (error) {
      return error.message;
    }
  }
  readOne(id) {
    try {
      const one = this.events.find((each) => each.id === Number(id));
      if (!one) {
        throw new Error("Not found event!");
      } else {
        return one;
      }
    } catch (error) {
      return error.message;
    }
  }
  async soldTicket(quantity, id) {
    try {
      if (!(quantity > 0)) {
        throw new Error("Insert valid quantity");
      } else {
        const one = this.readOne(id);
        if (typeof one === "string") throw new Error(one);
        if (quantity > one.capacity) throw new Error("No more capacity");
        one.capacity = one.capacity - quantity;
        EventsFs.#totalGain =
          EventsFs.#totalGain + EventsFs.#perGain * quantity * one.price;
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(this.events, null, 2)
        );
        return true;
      }
    } catch (error) {
      return error.message;
    }
  }
}

const event = new EventsFs("./fs/files/events.json");
//event.createEvent({ name: "hp1", place: "showcase" });
//console.log(event.readEvents());
event
  .soldTicket(10, 2)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
console.log(event.readOne(2));
