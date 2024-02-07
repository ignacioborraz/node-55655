import { model, Schema } from "mongoose";

const collection = "events";
const schema = new Schema(
  {
    name: { type: String, required: true },
    poster: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
    place: { type: String, required: true },
    price: { type: Number, default: 10 },
    capacity: { type: Number, default: 50 },
    date: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
  }
);

const Event = model(collection, schema);
export default Event;
