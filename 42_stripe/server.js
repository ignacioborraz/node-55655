import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
//import fileStore from "session-file-store";
import MongoStore from "connect-mongo";

import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/dbConnect.util.js";

//http server
const server = express();
const port = process.env.PORT || 9000;
const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect();
};
server.listen(port, ready);

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use(cookieParser(process.env.SECRET_COOKIE));
//const FileSession = fileStore(session);
server.use(
  session({
    /* file store */
    /*  
      store: new FileSession({
      path: "./src/data/fs/files/sessions",
      ttl: 60 * 60,
    }),
    */
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI, ttl: 60 * 60 }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    //cookie: { maxAge: 60 * 60 * 1000 },
  })
);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
