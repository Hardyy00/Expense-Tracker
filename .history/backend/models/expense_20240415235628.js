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
    enum: [],
  },
});
