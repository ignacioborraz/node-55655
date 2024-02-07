import { Router } from "express";
import usersRouter from "./users.router.api.js";
import eventsRouter from "./events.router.api.js";

const apiRouter = Router()

//definir los enrutadores de los recursos
apiRouter.use("/users",usersRouter)
apiRouter.use("/events",eventsRouter)

export default apiRouter
//export el enrutador de la API para poder implementarlo en el enrutador del servidor