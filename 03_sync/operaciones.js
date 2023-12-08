//dividirConPromesa es una fusión de dividir+funcionManejadoraDeError
function dividirConPromesa(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n1 && n2 !== 0) {
      resolve("El resultado de la operación es: " + n1 / n2);
    } else {
      reject("Ocurrio el error: no existe n1 o n2 es cero");
    }
  });
}

/* function dividir (n1,n2, funcionManejadoraDeError) {
  if (n1 && n2 !== 0) {
    funcionManejadoraDeError(null,n1/n2)
  } else {
    funcionManejadoraDeError("n1 no existe o n2 es cero")
  }
} */

function elevadoa(num1, num2, funcionManejadoraDeError) {
  if ((num1 || num1 === 0) && (num2 || num2 === 0)) {
    return funcionManejadoraDeError(null, num1 ** num2);
  } else {
    return funcionManejadoraDeError("faltan parámetros");
  }
}

//el objetivo de usar PROMESAS es no depender de esta callback
/* function funcionManejadoraDeError(error,exito) {
  if(error) {
    console.log('Ocurrio el error:', error);
  } else {
    console.log('El resultado de la operación es:', exito);
  }
} */

/* async function calcular(num1, num2, operacion) {
  //operacion(num1,num2,funcionManejadoraDeError)
  try {
    console.log(await operacion(num1, num2));
  } catch (error) {
    console.log(error);
  }
} */

function calcular(num1, num2, operacion) {
  operacion(num1, num2)
    .then((respuesta) => {
      console.log(respuesta);
      return "primer then";
    })
    .then((res) => {
      console.log(res);
      return "segundo then";
    })
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));
}

//calcular(10,"a",dividir)
//calcular(10,0,dividir)
//calcular(2,5,elevadoa)
//calcular(2,null,elevadoa)

calcular(10, 5, dividirConPromesa);
calcular(10, 0, dividirConPromesa);
