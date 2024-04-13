const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { configCloudinary } = require("./config/handleUpload");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const connectDB = require("./config/connectDb");
const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
configCloudinary();

// Use your routes
app.use("/", userRoutes);

// Connect to MongoDB
connectDB();

// Port configuration
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
