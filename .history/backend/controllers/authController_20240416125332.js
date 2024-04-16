const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { upload, handleUpload } = require("../config/handleUpload");
const Buffer = require("buffer");
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Login function
async function login(req, res) {
  const { username, password } = req.body;
  // console.log("login krne pr re.body",req.body)

  console.log(username, password);

  try {
    // Find user by username
    const user = await User.findOne({ username });

    console.log(user);
    // console.log("login se user=",user);

    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Invalid credentials", success: false });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ msg: "Invalid credentials", success: false });
    }

    // If credentials are valid, create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    // Set cookies with JWT token
    const options = {
      maxAge: 3 * 24 * 60 * 60 * 1000, // Expires in 3 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure flag based on environment
      sameSite: "strict", // Set SameSite attribute
    };

    const doc = user._doc;

    return res
      .cookie("token", token, options)
      .status(200)
      .json({ user: doc, success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

// Register function
async function register(req, res) {
  // console.log("registerController",req.body);

  const {
    username,
    password,
    name,
    age,
    gender,
    profession,
    email,
    phone,
    about,
    annualIncome,
  } = req.body;

  let profilePhoto;

  try {
    //     // console.log("Request mai file:",req.file);
    if (!req.file) {
      profilePhoto =
        "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg";
    } else {
      const b64 = req.file.buffer.toString("base64");
      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      // Upload the image to Cloudinary
      const cldRes = await handleUpload(dataURI);
      profilePhoto = cldRes.url;
    }
    //   console.log(req.file);
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .send({ success: false, message: "User Already Exist" });
    }

    // Create new user instance
    user = new User({
      username,
      password,
      name,
      age,
      gender,
      profession,
      profilePhoto,
      email,
      phone,
      about,
      annualIncome,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to the database
    await user.save();
    console.log(req.body);
    console.log(user);

    // If registration is successful, also log in the user
    const token = jwt.sign(
      { id: user._id, password: user.password },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    res.cookie("authToken", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000, // Expires in 3 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure flag based on environment
      sameSite: "strict", // Set SameSite attribute
    });

    res.status(200).json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

const logout = async (req, res) => {
  res.clearCookie("authToken");

  res.redirect("/login");
};

module.exports = {
  login,
  register,
  logout,
};
