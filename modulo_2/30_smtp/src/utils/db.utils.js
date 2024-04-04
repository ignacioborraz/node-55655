import { connect } from "mongoose";

export default async () => {
  try {
    await connect(process.env.DB_LINK)
    console.log("mongo database connected");
  } catch (error) {
    console.log(error);
  }
};
