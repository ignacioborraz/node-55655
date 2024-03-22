import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

class EventDTO {
  constructor(data) {
    argsUtil.env !== "prod" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.title = data.title;
    this.poster = data.poster || "https://i.postimg.cc/HxdvTwqJ/events.jpg";
    this.place = data.place;
    this.price = data.price || 10;
    this.capacity = data.capacity || 50;
    this.date = data.date || new Date();
    argsUtil.env !== "prod" && (this.updatedAt = new Date());
    argsUtil.env !== "prod" && (this.createdAt = new Date());
  }
}

export default EventDTO;
