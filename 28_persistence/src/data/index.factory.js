import argsUtil from "../utils/args.util.js";
import dbConnection from "../utils/dbConnection.util.js"

const environment = argsUtil.env;
//la variable puede ser el ambiente o directamente la persistencia con la que tengo que trabajar
//va a depender de una variable de entorno o del argumento que se pase

let dao = {};

switch (environment) {
  case "test":
    //vamos a usar MEMORY
    console.log("MEMORY CONNECTED");
    const { default: eventsMemory } = await import("./memory/events.memory.js")
    dao = { events: eventsMemory }
    break;
  case "dev":
    //vamos a usar FS
    console.log("FS CONNECTED");
    const { default: eventsFs } = await import("./fs/events.fs.js")
    const { default: usersFs } = await import("./fs/users.fs.js")
    const { default: ordersFs } = await import("./fs/orders.fs.js")
    const { default: commentsFs } = await import("./fs/comments.fs.js")
    dao = { events: eventsFs, users: usersFs, orders: ordersFs, comments: commentsFs }
    break;
  case "prod":
    //vamos a usar MONGO
    //aca es necesario configurar la conexión de mongo
    dbConnection()
      .then(() => console.log("MONGO CONNECTED"))
    const { default: eventsMongo } = await import("./mongo/events.mongo.js")
    const { default: usersMongo } = await import("./mongo/users.mongo.js")
    const { default: ordersMongo } = await import("./mongo/orders.mongo.js")
    const { default: commentsMongo } = await import("./mongo/comments.mongo.js")
    dao = { events: eventsMongo, users: usersMongo, orders: ordersMongo, comments: commentsMongo }
    break;
  default:
    break;
}

export default dao;
