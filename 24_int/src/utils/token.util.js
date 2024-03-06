import jwt from "jsonwebtoken";

const createToken = (data) => jwt.sign(data, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 });

const verifytoken = (token) => {
  if (token) return jwt.verify(token, process.env.SECRET);
  const error = new Error("bad auth token");
  error.statusCode = 401;
  throw error;
}

export { createToken, verifytoken };
