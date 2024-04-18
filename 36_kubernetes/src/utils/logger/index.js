const persistence = process.env.MODE || "PROD";

let logger;

switch (persistence) {
  case "PROD":
    const { default: winstonTest } = await import("./winston.utils.js");
    logger = winstonTest
    break;
  default:
    const { default: winstonDev } = await import("./winstonDev.utils.js");
    logger = winstonDev
    break;
}

export default logger;