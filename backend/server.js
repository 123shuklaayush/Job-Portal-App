import app from "./app.js"; // Import the Express app from app.js
import cloudinary from "cloudinary"; // Import cloudinary here

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});



// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

