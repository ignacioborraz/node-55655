import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "categories";
const schema = new Schema(
  {
    category: { type: String, required: true, unique: true, index: true },
    photo: {
      type: String,
      default: "/image.jpg",
    },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Category = model(collection, schema);
export default Category;
