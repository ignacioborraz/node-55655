import { genSaltSync, hashSync, compareSync } from "bcrypt";

const createHash = (password) => {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
};

const verifyHash = (reqBodyPass, mongoPass) => {
  const verify = compareSync(reqBodyPass, mongoPass);
  return verify;
};

export { createHash, verifyHash };
