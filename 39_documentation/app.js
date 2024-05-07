import "dotenv/config.js";

import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

import router from "./src/routes/index.js";

import errorHandler from "./src/middlewares/errorHandler.js";
import notFoundHandler from "./src/middlewares/notFoundHandler.js";
import __dirname from "./utils.js";
import options from "./src/config/swagger.js";

const app = express();
const PORT = process.env.PORT || 8080;

const specs = swaggerJSDoc(options);
app.use("/api/docs", serve, setup(specs));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/", express.static(__dirname + "/public"));

app.use("/api", router);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
