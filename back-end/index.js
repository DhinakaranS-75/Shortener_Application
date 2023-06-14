const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

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

app.use(express.json());
