const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.clouduploads = async (files) => {
  // console.log(files);
  const uploadResults = [];

  for (const file of files) {
    try {
      const result = await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result)
      })
      uploadResults.push({ url: result.url, id: result.public_id });
    } catch (error) {
      console.error(error);
      throw new Error("Upload failed");
    }
  }

  return uploadResults;
};
