import { createLogger, format, transports, addColors } from "winston";
const { colorize, simple } = format;

const levels = { ERROR: 0, WARN: 1, INFO: 2, HTTP: 3 };

export default createLogger({
  levels,
  format: colorize(),
  transports: [new transports.Console({ level: "HTTP", format: simple() })],
});
