"use strict";

const express = require("express");
const stream = require("./stream");

const app = express();

app.get("/data", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  stream().pipe(res);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
