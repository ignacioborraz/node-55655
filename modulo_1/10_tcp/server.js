import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import morgan from "morgan";
import { engine } from "express-handlebars";
import events from "./src/data/fs/events.fs.js";

import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHandler from "./src/middlewares/pathHandler.js";
import __dirname from "./utils.js";

//server
const server = express();
const PORT = 8080;
const ready = console.log("server ready on port " + PORT);
const httpServer = createServer(server);
const socketServer = new Server(httpServer);
httpServer.listen(PORT, ready);
socketServer.on("connection", (socket) => {
  //console.log(socket);
  //socket es TODA la data que envía el cliente LUEGO del handshake
  console.log("client " + socket.id + " connected");
  socket.emit("movies", events.readEvents());
  socket.on("newMovie", async (data) => {
    try {
      //buscar la forma de comprar lo del middleware
      await events.createEvent(data);
      //emito la actualizacion a de los eventos a todos sockets de clientes (fronts)
      socketServer.emit("movies", events.readEvents());
    } catch (error) {
      console.log(error);
    }
  });
});

//views
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(morgan("dev"));

//endpoints
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
