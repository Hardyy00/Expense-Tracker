const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  amount: {
    type: Number,
  },

  date: {
    type: String,
  },

  title: {
    type: String,
  },

  category: {
    type: String,
  },

  subcategory: {
    type: String,
  },

  type: {
    type: String,
    enum: [
      "Spent",
      "Earned",
      "Loaned To Friend",
      "Loaned From Friend",
      "Gave Back To",
      "Got Back From",
    ],
  },

  friendName: {
    type: String,
  },
});
