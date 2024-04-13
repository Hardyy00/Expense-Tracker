const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Cloudinary configuration
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  console.log("cloud to config ho gya");
};

// Function to handle file upload to Cloudinary
const handleUpload = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    throw error;
  }
};

module.exports = { upload, handleUpload, configCloudinary };
