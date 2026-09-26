const emailController=require("../controllers/emailcontroller")
const express=require("express")
const router=express.Router()
router.post("/sendotp",emailController.sendOtp)
router.post("/verifyotp",emailController.verifyotp)

module.exports=router