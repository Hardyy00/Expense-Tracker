const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    profilePhoto: { type: String },
    email: { type: String, required: true },
    userId: { type: String },
    username: { type: String },
    phone: { type: String },
    profession: { type: String, default: "Other" },
    annualIncome: { type: Number, required: true },
    expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expenses" }],
    spendLimit: {
      type: Number,
      default: 1000,
    },

    loanedFromLimit: {
      type: Number,
      default: 1000,
    },
    loanedToLimit: {
      type: Number,
      default: 1000,
    },
  },
  { timestamps: true }
); // Adding timestamps true

module.exports = mongoose.model("user", registerSchema);
