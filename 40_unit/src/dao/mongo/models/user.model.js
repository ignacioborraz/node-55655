import mongoose from "mongoose";

const collection = "users";

const schema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png" },
  role: { type: String, default: "user" },
});

const User = mongoose.model(collection, schema);

export default User;
