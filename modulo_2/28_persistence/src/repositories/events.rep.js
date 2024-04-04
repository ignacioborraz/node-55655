import EventDTO from "../dto/event.dto.js";
import dao from "../data/index.factory.js";

const { events } = dao;

class EventsRep {
  constructor() {
    this.model = events;
  }
  create = async (data) => {
    data = new EventDTO(data);
    const response = await this.model.create(data);
    return response;
  };
  read = async ({ filter, options }) =>
    await this.model.read({ filter, options });
  readOne = async (id) => await this.model.readOne(id);
  update = async (id, data) => await this.model.update(id, data);
  destroy = async (id) => await this.model.destroy(id);
}

const repository = new EventsRep();
export default repository;
