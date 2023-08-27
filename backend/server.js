const express = require("express");
const {chats} = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

dotenv.config();

connectDB();
const app = express();


app.get("/",(req,res) =>{
    res.send("API is running")
})

app.get("/api/chat",(req,res) =>{
    res.send("chats");
});

app.get("/api/chat/:id",(req,res) =>{
    console.log(req)
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server started on port ${PORT}`));