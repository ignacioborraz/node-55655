import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "sizes";
const schema = new Schema(
  {
    size: { type: String, required: true, unique: true, index: true },
    dsescription: { type: String },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Size = model(collection, schema);
export default Size;
