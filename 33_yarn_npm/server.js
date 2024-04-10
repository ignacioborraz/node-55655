import express from "express";
import calculator from "calculator-55655";
import {
  division,
  subtraction,
  multiplication,
  exponential,
} from "calculator-55655";

const server = express();
const port = 8080;
const ready = console.log("server ready on port " + port);
server.listen(port, ready);
//MIDDLEWARES
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

//ENDPOINTS
server.get("/addition/:n1/:n2", (req, res) => {
  try {
    const { n1, n2 } = req.params;
    const addition = calculator.addition(Number(n1), Number(n2));
    return res.json({ response: addition });
  } catch (error) {
    return res.json({ response: error.message });
  }
});
server.get("/subtraction/:n1/:n2", (req, res) => {
  try {
    const { n1, n2 } = req.params;
    return res.json({ response: subtraction(n1, n2) });
  } catch (error) {
    return res.json({ response: error.message });
  }
});
server.get("/multiplication/:n1/:n2", (req, res) => {
  try {
    const { n1, n2 } = req.params;
    return res.json({ response: multiplication(n1, n2) });
  } catch (error) {
    return res.json({ response: error.message });
  }
});
server.get("/division/:n1/:n2", (req, res) => {
  try {
    const { n1, n2 } = req.params;
    return res.json({ response: division(n1, n2) });
  } catch (error) {
    return res.json({ response: error.message });
  }
});
server.get("/exponential/:n1/:n2", (req, res) => {
  try {
    const { n1, n2 } = req.params;
    return res.json({ response: exponential(n1, n2) });
  } catch (error) {
    return res.json({ response: error.message });
  }
});
