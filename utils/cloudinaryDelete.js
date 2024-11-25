const cloudinary = require("./cloudinary.config");

exports.cloudinaryDelete = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error(error);
  }
};
