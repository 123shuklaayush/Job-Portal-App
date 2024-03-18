import path from "path";
import express from "express";
import app from "./app.js"; // Assuming app.js exports the Express app

const __dirname = path.resolve();

// Serve static files
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Wildcard route for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Cloudinary configuration
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});



