//require('dotenv').config({path:'./env'})


import dotenv from "dotenv";
import connectDB from "./DB/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is runnning on port ${process.env.PORT||8000}`);
        
    })
}).catch((err)=>{

})






















































































































/*after seing mongoose documentation , we can say that it takes one line to connect to database
//mongoose.connect('mongodb://url//test');
//but we should not do this to avoid future inconvenience
//correct way is below

// function connectDB(){};
connectDB();*/



/*import express from "express";
const app=express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("err: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port${process.env.PORT}`);
            
        })
    }
    catch(error){
     console.error("Error is: ",error);
     
    }
})()*/

