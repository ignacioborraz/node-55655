import { Command } from "commander";

const args = new Command();

args.option("-p <port>", "port");
// - si es SOLO una letra
args.option("--env <env>", "environment", "prod");
// -- si es MAS de una

args.parse();
export default args.opts();
