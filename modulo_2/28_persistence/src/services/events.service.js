import repository from "../repositories/events.rep.js";
import EventDTO from "../dto/event.dto.js";

class EventsService {
  constructor() {
    this.repository = repository;
  }
  create = async (data) => {
    data = new EventDTO(data);
    const response = await this.repository.create(data);
    return response;
  };
  read = async ({ filter, options }) =>
    await this.repository.read({ filter, options });
  readOne = async (id) => await this.repository.readOne(id);
  update = async (id, data) => await this.repository.update(id, data);
  destroy = async (id) => await this.repository.destroy(id);
}

const service = new EventsService();
export default service;
