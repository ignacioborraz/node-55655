import { connect } from "mongoose";
import wintsonLog from "./logger/winston.utils.js";

export default async () => {
  try {
    await connect(process.env.DB_LINK);
    wintsonLog.INFO("mongo database connected");
  } catch (error) {
    wintsonLog.WARN(error.message);
  }
};
