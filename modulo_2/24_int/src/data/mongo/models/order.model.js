import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "orders";
const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, required: true, ref: "users" },
    clothe_id: { type: Types.ObjectId, required: true, ref: "clothes" },
    quantity: { type: Number, default: 1 },
    state: {
      type: String,
      enum: ["reserved", "paid", "delivered"],
      default: "reserved",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function () {
  this.populate("user_id", "-createdAt -updatedAt -__v");
});
schema.pre("find", function () {
  this.populate("clothe_id", "-createdAt -updatedAt -__v");
});

const Order = model(collection, schema);
export default Order;
