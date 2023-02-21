const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

port = process.env.PORT;

//routes
app.get("/",(req,res)=>{
   res.send("hello"); 
})

app.post("/payment",(req,res)=>{
    const body = req.body;
    console.log(body);
    console.log(body.name);
    res.json(body);
})

app.listen(parseInt(port), _ => console.log(`the server is listening on port ${parseInt(port) }`))