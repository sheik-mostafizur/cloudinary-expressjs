const cloudinary = require("./cloudinary.config");

exports.cloudinaryUpload = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: true,
    // overwrite: true,
    resource_type: "image",
    folder: "cloudinary-expressjs",
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result;
  } catch (error) {
    console.error(error);
  }
};
