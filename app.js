const express=require("express");
const app=express();
require('dotenv').config();

const port=4000;

app.get("/", (req,res)=>{
  res.send("Hello World");
})
app.get("/twitter" , (req,res)=>{
  res.send("Sahil Pundir");
})

app.get("/login",(req,res)=>{
  req.send('<h1>Welcome to login Page</h1>')
})

app.listen(process.env.port,()=>{
  console.log(`App Listening on port : ${process.env.port}`)
})