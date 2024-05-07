import mongoose from "mongoose";

const collection = "adoptions";

const schema = new mongoose.Schema({
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  pet: { type: mongoose.SchemaTypes.ObjectId, ref: "pets" },
});

const Adoption = mongoose.model(collection, schema);

export default Adoption;
