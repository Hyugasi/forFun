require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("this is a thing");
});

app.listen(PORT, () => {
  console.log(`Now Listening on ${PORT}`);
});
