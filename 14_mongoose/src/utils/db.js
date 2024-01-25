import { connect } from "mongoose";

const dbConnection = async () => {
  try {
    await connect(process.env.DB_LINK);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
