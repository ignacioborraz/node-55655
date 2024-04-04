import { connect } from "mongoose";

export default async function dbConnection() {
  try {
    await connect(process.env.DB_LINK);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}
