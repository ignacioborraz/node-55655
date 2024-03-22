import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "events";
const schema = new Schema(
  {
    name: { type: String, required: true, index: true },
    poster: {
      type: String,
      default: "https://i.postimg.cc/HxdvTwqJ/events.jpg",
    },
    place: {
      type: String,
      default: "Village",
      enum: ["Hoyts", "Showcase", "Village", "Stadium"],
      index: true,
    },
    price: { type: Number, default: 10 },
    capacity: { type: Number, default: 50 },
    date: { type: Date, default: new Date(), index: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Event = model(collection, schema);
export default Event;
