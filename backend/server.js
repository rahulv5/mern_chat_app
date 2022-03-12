const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API in running!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(5000, () => {
  console.log(`Listening on port ${PORT}`);
});
