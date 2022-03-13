// Name, Email, Password, User's Picture
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model(userSchema);

module.exports = User;
