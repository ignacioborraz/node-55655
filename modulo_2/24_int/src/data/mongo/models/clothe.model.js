import { model, Schema, Types } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "clothes";
const schema = new Schema(
  {
    name: { type: String, required: true, index: true },
    size_id: { type: Types.ObjectId, required: true, ref: "sizes" },
    category_id: { type: Types.ObjectId, required: true, ref: "categories" },
    stock: { type: Number, default: 1 },
    photo: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

schema.pre("find", function () {
  this.populate("size_id", "-createdAt -updatedAt -__v");
});
schema.pre("find", function () {
  this.populate("category_id", "-createdAt -updatedAt -__v");
});

const Clothe = model(collection, schema);
export default Clothe;
