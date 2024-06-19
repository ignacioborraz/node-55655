import mongoosePaginate from "mongoose-paginate-v2";
import { Schema, Types, model } from "mongoose";

const collection = "notes";
const schema = new Schema(
  {
    text: { type: String, required: true },
    category: {
      type: String,
      default: "to do",
      enum: ["to do", "done"],
      index: true,
    },
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
schema.pre("find", function () { this.populate("user_id", "email") });

const Note = model(collection, schema);
export default Note;
