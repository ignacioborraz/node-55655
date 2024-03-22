import User from "./models/user.model.js";
import Clothe from "./models/clothe.model.js";
import Size from "./models/size.model.js";
import Category from "./models/category.model.js";
import Order from "./models/order.model.js";
import notFoundOne from "../../utils/notFoundOne.util.js";

class MongoManager {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async read({ filter, options }) {
    try {
      const all = await this.model.paginate(filter, options);
      if (all.totalDocs === 0) {
        const error = new Error("There aren't any document");
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
      const one = await this.model.findById(id).lean();
      notFoundOne(one);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async readByEmail(email) {
    try {
      const one = await this.model.findOne({ email });
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

const users = new MongoManager(User);
const clothes = new MongoManager(Clothe);
const sizes = new MongoManager(Size);
const categories = new MongoManager(Category);
const orders = new MongoManager(Order);

export { users, clothes, sizes, categories, orders };
export default MongoManager;
