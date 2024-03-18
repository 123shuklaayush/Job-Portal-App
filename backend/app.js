// app.js
import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();
config({ path: "./config/config.env" });

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://job-portal-app-zlg3.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

// Enable pre-flight OPTIONS request for CORS
app.options('*', cors());

// Error middleware
app.use(errorMiddleware);

// Database connection
dbConnection();

export default app;
