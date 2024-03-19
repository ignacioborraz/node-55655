import service from "../services/notes.service.js";

class AuthController {
  constructor() {
    this.service = service;
  }
  register = async (req, res, next) => {};
  login = async (req, res, next) => {};
  signout = async (req, res, next) => {};
}

const controller = new AuthController();
const { register, login, signout } = controller;
export { register, login, signout };
