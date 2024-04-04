import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "comments";
const schema = new Schema(
  {
    text: { type: String, required: true },
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    event_id: { type: Types.ObjectId, required: true, ref: "events" },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);
schema.pre("find", function () {
  this.populate("user_id", "-password -createdAt -updatedAt -__v");
});
schema.pre("find", function () {
  this.populate("event_id", "title poster place price");
});

const Comment = model(collection, schema);
export default Comment;
