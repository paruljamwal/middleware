const express=require("express");
const bookcontroller=require("./controller/bookcontroller");
const app=express();

app.use(express.json());
app.use("/book",bookcontroller);
module.exports=app;