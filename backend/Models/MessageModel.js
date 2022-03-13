const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

// 1. Name/ID of the sender
//2. Content of Message
//3. Reference to the chat to which the message belongs to

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timeStamps: true,
  }
);

const Message = mongoose.model(messageModel);

module.exports = Message;
