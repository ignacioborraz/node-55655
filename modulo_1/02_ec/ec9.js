const datos = {
  nombre: "ignacio",
  apellido: "borraz",
  edad: "32",
};

const datosExtras = {
  ciudad: "rosario",
  nacimiento: 1990,
};
const objetosUnidos = { ...datos, ...datosExtras };
//console.log(objetosUnidos);

const array1 = [1, 2, 3, 4];
const array2 = [10, 20, 30, 40];
const arraysUnidos = [...array1, ...array2];
//console.log(arraysUnidos);

//const nombre = objetosUnidos.nombre
//const ciudad = objetosUnidos.ciudad
//const nacimiento = objetosUnidos.nacimiento

//desestructuracion: sacar de un objeto las propiedades que necesito (sirve tmb para arrays)
const { nombre, nacimiento, ciudad, ...rest } = objetosUnidos;
//console.log(nombre);
//console.log(nacimiento);
//console.log(rest);

//estructuracion: contruye un objeto en base a propiedades que se llaman como la variable
const poder = "inteligencia";
const pseudonimo = "ironman";
const equipo = "vengadores";
const heroe = { poder, pseudonimo, equipo };
//console.log(heroe);
