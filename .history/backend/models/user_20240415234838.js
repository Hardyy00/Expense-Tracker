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
    expenses: [],
  },
  { timestamps: true }
); // Adding timestamps true

module.exports = mongoose.model("user", registerSchema);
