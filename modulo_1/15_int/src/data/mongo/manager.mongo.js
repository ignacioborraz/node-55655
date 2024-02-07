//importar los modelos para luego generar las instancias de los diferentes managers
import Event from "./models/event.model.js";
import User from "./models/user.model.js";
import Order from "./models/order.model.js";
import notFoundOne from "../../utils/notFoundOne.utils.js";

class MongoManager {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const one = await this.model.create(data);
      return one._id;
    } catch (error) {
      throw error;
    }
  }
  async read(obj) {
    try {
      //ahora obj es un objeto con dos propiedades
      //filter con las consultas para el filtro
      //order con el objeto para el ordenamiento
      let { filter, order } = obj;
      //if (!order) order = { name: 1 };    //para configurar filtro por defecto
      //if (!filter) filter = {};           //para configurar orden por defecto
      const all = await this.model
        .find(filter)
        .populate("user_id")
        .populate("event_id")
        .sort(order);
      if (all.length === 0) {
        const error = new Error("There aren't documents");
        error.statusCode = 404;
        throw error;
      }
      return all;
    } catch (error) {
      throw error;
    }
  }
  async readOne(id) {
    try {
      const one = await this.model.findById(id);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const opt = { new: true };
      const one = await this.model.findByIdAndUpdate(id, data, opt);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = await this.model.findByIdAndDelete(id);
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
}

const events = new MongoManager(Event);
const users = new MongoManager(User);
const orders = new MongoManager(Order);

export { events, users, orders };
