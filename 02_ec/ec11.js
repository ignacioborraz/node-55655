//ternario
const edad = 33;
//(condicion) ? (que pasa si es verdadero) : (que pasa si es falso)
edad > 18 ? console.log("sos mayor de edad") : console.log("sos menor de edad");

//&& (retorna siempre el segundo elemento)
//(condición) && (se ejecuta UNICAMENTE si la condición es verdadera)
edad > 18 && console.log("se está impimiendo este log");

const nula = null;
const noDefinida = undefined;
const falso = false;
//(condició) es null o undefined ?? (ejecuta lo que está luego del operador)
nula ?? console.log("la variable es null o undefined");
noDefinida ?? console.log("la variable es null o undefined");
falso ?? console.log("la variable es null o undefined");
