const nombre = "igna"
console.log(nombre);

//declaracion y tipado de datos primitivos
const apellido: string = "borraz"
const edad: number = 33
let mascotas: boolean = true
//mascotas = "no"
let id: number | string = 123456
id = "123456"

interface Product {
    title: string,
    price: number,
    stock: number,
    photo: string,
    available?: boolean
}

const shoes: Product = {
    title: "shoes",
    price: 10,
    stock: 1000,
    photo: "photo.png",
    //available: true
}
const shirt: Product = {
    title: "shirt",
    price: 5,
    stock: 500,
    photo: "shirt.jpeg"
}

console.log(shoes);

function sumar(num1: number, num2: number): void {
    console.log(num1 + num2);
    //return num1+num2
}

const restar = (num1: number, num2: number): string => {
    console.log(num1 - num2);
    const resultado = num1 - num2
    return "El resultado de la resta es: " + resultado
}

const products1: string[] = ["shoes", "shirt", "dress"]
const products2: Product[] = [shoes, shirt]
const products3: Array<string> = ["pullover", "trousers"]
const products4: Array<Product> = [shirt, shoes]

type data = string | number | boolean
type entryType = [string, data]
//const entries: entryType[] = Object.entries(shoes)
//const entries: Array<entryType> = Object.entries(shoes)

function esGenerica<cualquierTipo>(dato: cualquierTipo): string {
    const tipoDeDato: string = typeof dato
    return "El parámetro pasado es de tipo: " + tipoDeDato
}
const resultado1 = esGenerica<string>("es string")
console.log(resultado1);
const resultado2 = esGenerica<number>(123)
console.log(resultado2);
const resultado3 = esGenerica<Product>(shoes)
console.log(resultado3);
const resultado4 = esGenerica<entryType>(["cadena de texto","otra cadena"])
console.log(resultado4);
