import express from "express";

const server = express();

const PORT = 8080;
const ready = () => console.log("server ready on port " + PORT);

//middlewares: son funciones
server.use(express.urlencoded({ extended: true }));
//obliga al servidor a utilizar la funcion encargada de recibir URL complejas
//me habilita el manejo de queries (consultas) y params (parámetros)

server.listen(PORT, ready);

//endpoints
const ruta = "/";
//callback de un endpoint (SIEMPRE depende de req y res)
const funcionQueVaAleer = (requerimientos, respuesta) => {
  //requerimientos: objeto con todas las necesidades de la función
  //respuesta: objeto a enviar al cliente
  return respuesta.status(200).send("<h1>MY FIRST SERVER</h1>");
};
server.get(ruta, funcionQueVaAleer);
//defino una ruta de tipo GET
//con la palabrita "/"
//para que ejecute la funcion definida
//que en ese caso SIMPLEMENTE envia ese string a la vista
const ruta2 = "/events";
const funcion2 = (req, res) => {
  const all = ["aca", "deberian", "estar", "todos", "los", "eventos"];
  return res.status(200).send(all);
  //por ahora usemos send() para enviar cadenas de texto o vistas
};
server.get(ruta2, funcion2);

const ruta3 = "/api/users";
//endpoints representativos del recurso que van a operar
//endpoints en ingles, en plural y en lo posible con minusculas
const funcion3 = (req, res) => {
  const all = ["array", "de", "usuarios", "del", "archivo"];
  return res.status(200).json(all);
  //usemos json() para enviar objetos,arrays, etc
};

server.get(ruta3, funcion3);
//cuando el cliente me llama
//con la ruta3 se ejecuta la funcion3

const rutaConParams1 = "/api/products/:pid";
//la ruta tiene el parámetro pid
//debido a los :
const cbParams1 = (req, res) => {
  const { pid } = req.params;
  return res.status(200).send("el id del producto a filtrar es: " + pid);
};
server.get(rutaConParams1, cbParams1);

const rutaConParams2 = "/api/products/:title/:category/:price/:stock";
//defini un endpoint con 4 params (no hay limites!!!)
const cbParams2 = (req, res) => {
  const { title, category, price, stock } = req.params;
  return res.status(200).json({
    title,
    category,
  });
};
server.get(rutaConParams2, cbParams2);

const rutaConQuery = "/api/events";
const cbQuery1 = (req, res) => {
  const consultas = req.query;
  const evento = consultas
  if (!consultas.capacity) {
    evento.capacity = 100
  } else {
    evento.capacity = Number(evento.capacity)
  }
  if (!consultas.price) {
    evento.price = 10
  } else {
    evento.price = Number(evento.price)
  }
  return res.status(200).json(evento);
};
server.get(rutaConQuery, cbQuery1);
