import express from "express";
import events from "./data/fs/events.fs.js";

const server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

//middlewares
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, ready);

//endpoints
server.get("/api/events", (req, res) => {
  try {
    const all = events.readEvents();
    if (Array.isArray(all)) {
      return res.status(200).json({
        success: true,
        response: all,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: all,
      });
    }
  } catch (error) {
    //IMPORTANTE: NO OLVIDAR ENVIAR RESPUESTA AL CLIENTE
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

server.get("/api/events/:eid",(req,res)=>{
  //agregar estructura de try catch y condicionales correspondientes
  const { eid } = req.params
  const one = events.readEventById(eid)
  return res.status(200).json(one)
})
