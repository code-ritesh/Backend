import dotenv from "dotenv";

dotenv.config({ path: './src/.env' });
import mongoose from "mongoose";
import  {DB_NAME} from "./constants.js";
import {connectDB} from "./db/index.js"
import {app} from "./app.js"



 connectDB()




// import dotenv from "dotenv";
// dotenv.config({ path: './src/.env' });

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";



// console.log("Loaded PORT:", process.env.PORT || 5000);


// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
//     console.log("✅ MongoDB connected successfully");

//     // Start server
//     const server = app.listen( process.env.PORT , () =>{
//              console.log("server is connected to the port  " + (process.env.PORT || 5000));
//         })

//     // Attach error listener to server, not app
//     server.on("error", (error) => {
//       console.error("❌ Server error:", error);
//     });

//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB:", error);
//   }
// })();