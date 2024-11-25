const cloudinary = require("./cloudinary.config");

exports.cloudinaryUpload = async (imagePath) => {
  const options = {
    // use_filename: true,
    // unique_filename: false,
    // overwrite: true,
    resource_type: "image",
    folder: "edust-org",
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    return result;
  } catch (error) {
    console.error(error);
  }
};
