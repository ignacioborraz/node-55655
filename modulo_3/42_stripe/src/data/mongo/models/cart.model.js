import { Schema, Types, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "carts";
const schema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      ref: "users",
      index: true,
      required: true,
    },
    product_id: {
      type: Types.ObjectId,
      ref: "products",
      index: true,
      required: true,
    },
    quantity: { type: Number, default: 1 },
    state: {
      type: String,
      enum: ["reserved", "paid", "delivered"],
      default: "reserved",
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function () { this.populate("user_id", "email photo") });
schema.pre("findOne", function () { this.populate("user_id", "email photo") });
schema.pre("find", function () { this.populate("product_id") });
schema.pre("findOne", function () { this.populate("product_id") });

const Cart = model(collection, schema);
export default Cart;
