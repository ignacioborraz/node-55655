const fs = require("fs");

const ruta = "./04_fs/data/events.prom.json";
const contenido = JSON.stringify([{ title: "hp1" }], null, 2);

fs.promises
  .writeFile(ruta, contenido)                       //primero
  .then((resultado) => console.log(resultado))      //segundo
  .catch((error) => console.log(error));

let configuracion = "utf-8";
fs.promises
  .readFile(ruta, configuracion)                    //tercero
  .then((resultado) => console.log(JSON.parse(resultado)))    //quinto
  .catch((error) => console.log(error));

fs.promises
  .unlink(ruta)
  .then((resultado) => console.log(resultado))    //cuarto
  .catch((error) => console.log(error));
