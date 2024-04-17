import { hashSync, genSaltSync, compare, compareSync } from "bcrypt";

function createHash(password) {
  const salt = genSaltSync(10);
  const hashPasword = hashSync(password, salt);
  return hashPasword;
}

function verifyHash(reqPass, dbPass) {
  const isValid = compareSync(reqPass, dbPass);
  return isValid;
}

export { createHash, verifyHash };
