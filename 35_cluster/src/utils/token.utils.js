import jwt from "jsonwebtoken";

const createToken = (data) =>
  jwt.sign(data, process.env.SECRET, { expiresIn: 60 * 60 * 24 });

const verifyToken = (headers) => {
  const token = headers.token;
  if (!token) {
    const error = new Error("bad auth");
    error.statusCode = 401;
    throw error;
  }
  return jwt.verify(token, process.env.SECRET);
};

export { createToken, verifyToken };
