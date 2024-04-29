import "dotenv/config.js";

import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import router from "./src/routes/index.js";

import errorHandler from "./src/middlewares/errorHandler.js";
import notFoundHandler from "./src/middlewares/notFoundHandler.js";
import __dirname from "./utils.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/", express.static(__dirname + "/public"));

app.use("/api", router);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
