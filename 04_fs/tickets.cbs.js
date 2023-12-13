const fs = require("fs")
//const nombreDelModulo = require("ruta del modulo")

const ruta = "./04_fs/data/events.cbs.json"
const contenido = JSON.stringify([{ title: "hp1" }, {title: "hp2"}, {title: "hp3"}],null,2)

//para crear o sobrescribir un archivo de manera asíncrona
//(casi siempre es síncrono)
fs.writeFile(ruta,contenido,(error)=> {
  if(error) {
    //recomiendo retornar error.message
    console.log(error);
    return error
  }
})

let configuracion = "utf-8";
//para leer el archivo de forma asíncrona
fs.readFile(ruta,configuracion,(error,exito)=>{
  if (error) {
    console.log(error);
    return error
  } else {
    console.log(exito);
    return exito
  }
})

//para eliminar el archivo de forma asíncrona
fs.unlink(ruta, (error)=> {
  if(error) {
    console.log(error);
    return error
  }
})