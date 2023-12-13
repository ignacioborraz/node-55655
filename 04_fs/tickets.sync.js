const fs = require("fs");
//import fs from "fs"; //lo vamos a ver la clase que viene
//import nombreDelModulo from "ruta del módulo ../02_ec/event.manager.js"

const ruta = "./04_fs/data/events.json";
const datos = JSON.stringify(
  [{ title: "hp1" }, { title: "hp2", place: "showcase" }],
  null,
  2
);
//para crear un archivo de forma síncrona
fs.writeFileSync(ruta, datos);

let configuracion = "utf-8";
//para leer un archivo de forma síncrona
const datosLeidos = fs.readFileSync(ruta, configuracion);
const datosParseados = JSON.parse(datosLeidos)
console.log(datosParseados);

//para verificar que un archivo existe de forma síncrona
const existeAntes = fs.existsSync(ruta)
console.log(existeAntes);

//para eliminar un archivo de forma síncrona
fs.unlinkSync(ruta)

//para verificar que un archivo existe de forma síncrona
const existeDespues = fs.existsSync(ruta)
console.log(existeDespues);
