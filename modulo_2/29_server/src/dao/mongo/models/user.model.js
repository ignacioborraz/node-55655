import mongoosePaginate from "mongoose-paginate-v2";
import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN", "PREM"] },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const User = model(collection, schema);
export default User;
