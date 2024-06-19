class CustomError {
  //las propiedades que necesite el CustomError son las mismas definidas en el diccionario de errores
  static new({ message, statusCode }) {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
  }
}

export default CustomError;
