import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
         try{ 
            console.log("hiii"); 
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n monodb connnected !! DB host :${connectionInstance.connection.host}`);
        
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port${process.env.PORT}`);
        })
    }
    catch(error){
     console.error("MongoDB connection Error ujjwal: ",error);
     process.exit(1);
    }
    }

export default connectDB;