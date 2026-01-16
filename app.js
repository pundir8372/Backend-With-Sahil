const express = require("express");
const app = express();
require("dotenv").config();


const PORT_VALUE = process.env.PORT_VALUE || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("Sahil Pundir");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to login Page</h1>");
});


app.listen(PORT_VALUE, "0.0.0.0", () => {
  console.log(`App Listening on port: ${PORT_VALUE}`);
});
