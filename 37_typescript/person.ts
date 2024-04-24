const nombre: string = "igna"
const mascotas: number = 1
const edad: number = 33
const hijos: boolean = false
const colores: string[] = ["azul", "verde"]

interface Persona {
    nombre: string,
    mascotas?: number,
    edad: number,
    hijos?: boolean,
    colores: Array<string>
}

const profe: Persona = { nombre, mascotas, edad, hijos, colores }
const alumno: Persona = { nombre: "agustin", edad: 25, colores: ["negro", "violeta"] }

const personas: Array<Persona> = [profe, alumno, { nombre: "eze", edad: 22, colores: ["rojo"] }]
console.log(personas);


const primerElemento = <arrayDeAlgo>(data: arrayDeAlgo): arrayDeAlgo => {
    return data[0]
}
console.log(primerElemento<Persona[]>(personas));
console.log(primerElemento<string[]>(["igna", "agustin"]));
