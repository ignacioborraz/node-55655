import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
    photo: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const User = model(collection, schema);
export default User;
