class MongoManager {
  constructor(model) {
    this.model = model;
  }
  async create(data) {}
  async read({ filter, options }) {}
  async readOne(id) {}
  async readByEmail(email) {}
  async update(id, data) {}
  async destroy(id) {}
}

export default MongoManager;
