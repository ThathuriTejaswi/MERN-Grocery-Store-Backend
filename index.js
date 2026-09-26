
const express=require("express")
const dotEnv=require("dotenv")
const mongoose=require("mongoose")
const productroutes=require("./routes/productroutes")
const path = require("path");
const adminroutes=require("./routes/adminroutes")
const emailroutes=require("./routes/emailroutes")
const cartroutes=require("./routes/cartroutes")
const cors = require("cors");
const app=express()
app.use(express.json());
app.use(cors());
 dotEnv.config()
//  mongoose.connect(process.env.MONGO_URI)
//  .then(()=>{
//     console.log("database connected successfully")
//  })
//  .catch((error)=>{
//     console.log(error.message)
//  })
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

mongoose.connection.on("connected", () => {
    console.log("Mongoose connection established");
});

mongoose.connection.on("error", (error) => {
    console.log("Mongoose error:", error.message);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});
 app.use("/uploads",express.static(path.join(__dirname,"uploads")))
 app.use("/api",productroutes)
 app.use("/admin",adminroutes)
 app.use("/email",emailroutes)
 app.use("/cart",cartroutes)
const Port = process.env.PORT || 8000;
app.listen(Port,()=>{
console.log(`Server running on ${Port}`)
})