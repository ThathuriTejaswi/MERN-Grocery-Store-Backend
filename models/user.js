const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:String,
    otpExpires:Date
},{timestamps:true})
module.exports=mongoose.model("user",userschema)