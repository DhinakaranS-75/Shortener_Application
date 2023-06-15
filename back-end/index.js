const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes =require("./Routes/AuthRoutes")
const app = express();
const cookieParser = require ("cookie-parser")


app.listen(8080, () => {
  console.log("Server Started on port 8080");
});

mongoose.connect("mongodb://0.0.0.0:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successfull")
}).catch(error=>{
    console.log(error.msg)
})

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);