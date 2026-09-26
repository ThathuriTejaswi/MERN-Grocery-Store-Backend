const User=require("../models/user")
const {generateOtp}=require("../email/generateOTP")
const {sendotpEmail}=require("../email/sendotp")
const jwt =require("jsonwebtoken")
exports.sendOtp=async(req,res)=>{
    try {
       const {name,email}=req.body;
       if(!email){
        return res.status(400).json({msg:"Email required"})
       }
       let user=await User .findOne({email})
       if(!user){
        user=await User.create({name,email})
       } const otp=generateOtp()
       user.otp=otp
       user.otpExpires=Date.now()+5*60*1000
       await user.save()
       await sendotpEmail(email,otp)
       res.status(200).json({
        success:true,
        message:"OTP sent to your email",
        name
       })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
exports.verifyotp=async(req,res)=>{
    try{
        const {email,otp}=req.body;
        if(!email||!otp){
            return res.status(400).json({msg:"Email and OTP are required"})

        } const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:"user not found"})

        } 
    if(!user.otp||String(user.otp)!==String(otp))
    {
       return res.status(400).json({msg:"Invalid OTP"})
    }
    if(user.otpExpires<Date.now()){
        return res.status(400).json({msg:"OTP Expired"})
    }
    user.otp=undefined
    user.otpExpires=undefined
    await user.save()
    const token=jwt.sign(
        {_id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"}
    );
    res.json({
        success: true,
        token
    });
}
        catch(error){
res.status(500).json({message:error.message})
        };
    }
