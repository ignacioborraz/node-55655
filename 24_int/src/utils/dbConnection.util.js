import { connect } from "mongoose";

async function dbConnection() {
  try {
    await connect(process.env.DB_LINK);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
}

export default dbConnection;
