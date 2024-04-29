export default class {
  static newError({ message, statusCode, status, where }) {
    const error = new Error(message)
    error.message = message
    error.statusCode = statusCode
    error.status = status
    error.where = where
    //where es la ubicación donde se está produciendo el error
    throw error
    //habilita al catcheador de errores
  }
}
