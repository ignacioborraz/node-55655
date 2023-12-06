class EventManager {
  //propiedad estatica o de la clase
  static events = [];
  //# para definir propiedad privada (para usarse dentro de la clase)
  static #perGain = 0.3;
  static #totalGain = 0;
  constructor(data) {
    this.id =
      EventManager.events.length === 0
        ? 1
        : EventManager.events[EventManager.events.length - 1].id + 1;
    this.name = data.name;
    this.place = data.place;
    this.price = data.price || 10;
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date();
    EventManager.events.push(this);
  }
  create(data) {
    const event = {
      id:
        EventManager.events.length === 0
          ? 1
          : EventManager.events[EventManager.events.length - 1].id + 1,
      name: data.name,
      place: data.place,
      price: data.price || 10,
      capacity: data.capacity || 50,
      date: data.date || new Date(),
    };
    EventManager.events.push(event);
  }
  read() {
    return EventManager.events;
  }
  readById(id) {
    return EventManager.events.find((each) => each.id === Number(id));
  }
  soldTicket(quantity,eventId) {
    const event = this.readById(eventId)  //guardo el evento a modificar (al vender entradas tengo que disminuir la capacidad)
    event.capacity = event.capacity - quantity
    //tengo que sumar (cantidad * precio * %ganancia)
    EventManager.#totalGain = EventManager.#totalGain + quantity*event.price*EventManager.#perGain
    return true
  }
  getGain() {
    return EventManager.#totalGain
  }
}

const events = new EventManager({
  name: "harry potter 1",
  place: "showcase",
});
events.create({
  name: "harry potter 2",
  place: "showcase",
});
events.create({
  name: "harry potter 3",
  place: "showcase",
});
events.create({
  name: "harry potter 4",
  place: "showcase",
});
//console.log(EventManager.events);
//console.log(events.read());
//console.log(events.readById(4));
events.soldTicket(5,2)
events.soldTicket(15,3)
events.soldTicket(8,1)
console.log(events.read());
console.log(events.getGain());

