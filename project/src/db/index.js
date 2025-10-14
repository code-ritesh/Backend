

import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

// const app = express();

// const connectDB = async () => {
        
//     try{

//     await mongoose.connect(`${process.env.DB_URL}`)

        
//         const server = app.listen( process.env.PORT , () =>{
//             console.log(`server is connected to the port ${process.env.PORT}`);
//         })

//         server.on("error" , (err) => {
//             console.log("db not connected on listen err is ", err);
//         })


        


//     } catch (error) {
//         console.log("error db not connected ", error);
//         process.exit(1); // we use this to exit from the process if db is not connected
//     }
// }

// export  {connectDB};






const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/youtube")
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

export { connectDB };
