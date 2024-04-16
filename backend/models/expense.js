const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

  amount: {
    type: Number,
    required : true
  },

  date: {
    type: String,
    required : true
  },

  title: {
    type: String,
    required : true
  },

  category: {
    type: String,
    required : true
  },

  subCategory: {
    type: String,
    
  },

  type: {
    type: String,
    enum: [
      "Spent",
      "Earned",
      "Loaned to Friend",
      "Loaned from Friend",
      "Gave Back To",
      "Got Back From",
    ],
  },

  friendName: {
    type: String,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
