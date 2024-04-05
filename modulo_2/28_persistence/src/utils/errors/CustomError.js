class CustomError {
  static new({ message, statusCode }) {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
  }
}

export default CustomError;
