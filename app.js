const express = require("express");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("Sahil Pundir");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to login Page</h1>");
});


app.get("/signup", (req, res) => {
  res.send("<h1>Welcome to sign up page</h1>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App Listening on port: ${PORT}`);
});
