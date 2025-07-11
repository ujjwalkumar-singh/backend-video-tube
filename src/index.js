import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app=express();


//after seing mongoose documentation , we can say that it takes one line to connect to database
//mongoose.connect('mongodb://url//test');
//but we should not do this to avoid future inconvenience
//correct way is below

// function connectDB(){};
// connectDB();



(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error")
    }
    catch(error){
     console.error("Error is: ",error);
     
    }
})()

