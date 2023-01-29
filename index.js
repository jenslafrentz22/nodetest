const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // im Browser:
  res.send("Hello World!");
  // in DevTool:
  console.log("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
//###########################
anderes Package aufrufen, z.b uuid von npmjs.org

Version 4 ansprechen:
const { v4: uuidv4 } = require("uuid");
console.log(v4);

// zeigt den Pfad an
console.log(__dirname);


*/
