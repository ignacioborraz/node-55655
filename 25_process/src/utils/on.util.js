process.on("exit", (code) =>
  console.log("el proceso terminó con código " + code)
);

process.on("uncaughtException", (error) =>
  console.log("ha ocurrido un error: " + error.message)
);

console.log(process.pid);
process.pid();
process.exit(1);
