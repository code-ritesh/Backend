// import mongoose from "mongoose";
// import  {DB_NAME} from "./constants.js";
// import {connectDB} from "./db/index.js"
// import { configDotenv } from "dotenv";

// configDotenv();

 //connectDB()




import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

dotenv.config();

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
    console.log("✅ MongoDB connected successfully");

    // Start server
    const server = app.listen(process.env.PORT, () => {
      console.log("🚀 App is listening on port", process.env.PORT);
    });

    // Attach error listener to server, not app
    server.on("error", (error) => {
      console.error("❌ Server error:", error);
    });

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
})();