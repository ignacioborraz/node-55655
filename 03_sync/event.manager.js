class EventManager {
  static #events = [];
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor() {}
  createEvent({ name, place, ...data }) {
    try {
      if (!name || !place) {
        throw new Error("Please, insert name & place");
        //VA A ACTIVAR EL CATCH (MANEJADOR DE ERRORES)
      }
      const event = {
        id:
          EventManager.#events.length === 0
            ? 1
            : EventManager.#events[EventManager.#events.length - 1].id + 1,
        name,
        place,
        price: data.price || 10,
        capacity: data.capacity || 50,
        date: data.date || new Date(),
      };
      EventManager.#events.push(event);
      return event.id;
    } catch (error) {
      //new Error genera un objeto error con un monton de propiedades
      //el mensaje configurado en la linea9 está en la propiedad message
      return error.message;
    }
  }
  readEvents() {
    try {
      if (EventManager.#events.length === 0) {
        throw new Error("Not found events!");
      } else {
        return EventManager.#events;
      }
    } catch (error) {
      return error.message;
    }
  }
  readOne(id) {
    try {
      let one = EventManager.#events.find((each) => each.id === Number(id));
      if (one) {
        return one;
      } else {
        throw new Error("Not found event with id=" + id);
      }
    } catch (error) {
      return error.message;
    }
  }
  soldTicket(quantity, id) {
    try {
      if (!(quantity>0)) {
        throw new Error("Insert valid quantity")
      } else {
        const one = this.readOne(id);
        console.log(one);
        if ((typeof one === "object") || quantity>one.capacity) {
          throw new Error("No more capacity")
        } else {
          one.capacity = one.capacity - quantity;
          EventManager.#totalGain =
            EventManager.#totalGain + EventManager.#perGain * quantity * one.price;
          return one.capacity;
        }
      }
    } catch (error) {
      return error.message
    }
  }
}

const events = new EventManager();
console.log(events.readEvents());
console.log(events.createEvent({ name: "hp1", place: "showcase" }));
console.log(events.createEvent({ name: "hp2" }));
console.log(events.createEvent({ place: "showcase" }));
console.log(events.createEvent({ name: "hp3", place: "showcase" }));
//console.log(events.readEvents());
console.log(events.readOne(1));
console.log(events.readOne(10));
console.log(events.soldTicket(-2,1));
console.log(events.soldTicket(100,2));
console.log(events.soldTicket(10,20));
