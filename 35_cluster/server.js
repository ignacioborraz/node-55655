import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "express-compression";
import cluster from "cluster";
import { cpus } from "os";

import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";
import wintsonLog from "./src/utils/logger/index.js";
import winston from "./src/middlewares/winston.js";

//server
const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => wintsonLog.INFO("server ready on port " + PORT);

//middlewares
server.use(
  cors({
    origin: true,
    credentials: true,
  })
);
server.use(cookieParser(process.env.SECRET));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(winston);
server.use(express.static("public"));
server.use(compression());

//endpoints
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);

//clusters
console.log(cluster.isPrimary);
if (cluster.isPrimary) {
  console.log("PRIMARY ID: " + process.pid);
  const numberOfProcess = cpus().length;
  console.log("NUMBER OF PROCESS OF MY COMPUTER: " + numberOfProcess);
  for (let i = 1; i <= numberOfProcess; i++) {
    cluster.fork();
  }
} else {
  console.log("WORKER ID: " + process.pid);
  server.listen(PORT, ready);
}
