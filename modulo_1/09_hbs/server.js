import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";

import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";

const server = express();
const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);
server.listen(PORT, ready);

//templates
server.engine("handlebars",engine())
server.set("view engine", "handlebars")
server.set("views", __dirname+"/src/views")

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));

//routers
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
