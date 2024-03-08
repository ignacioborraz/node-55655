import { orders } from "../data/mongo/manager.mongo.js";

class OrdersService {
  constructor() {
    this.model = orders;
  }
  create = async (data) => await this.model.create(data);
  read = async ({ filter, options }) =>
    await this.model.read({ filter, options });
  report = async (id) => await this.model.report(id);
  update = async (data) => await this.model.update(id, data);
  destroy = async (id) => await this.model.destroy(id);
}

const service = new OrdersService();
export default service;
