const fs = require("fs");

const router = require("express").Router();
const multer = require("multer");
const { cloudinaryUpload } = require("../utils/cloudinaryUpload");

router.get("/", (req, res) => {
  res.json({ message: "Image upload" });
});

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  dest: "uploads/",
}); // 5MB limit

router.post("/", upload.single("image"), async (req, res) => {
  const { name, email } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Upload the image to Cloudinary
    const result = await cloudinaryUpload(req.file.path);
    console.log(result);

    // Return the Cloudinary URL and other details

    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Error deleting file:", err);
    });

    res.status(200).json({
      message: "Image uploaded successfully",
      name,
      email,
      cloudinaryUrl: result.secure_url,
    });
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});

module.exports = router;
