const router = require("express").Router();
const authController = require("../controllers/authController");
const { upload } = require("../config/handleUpload");
router.get("/", (req, res) => {
  res.send("hello");
});
router.post(
  "/register",
  upload.single("profilePhoto"),
  authController.register
);
module.exports = router;
