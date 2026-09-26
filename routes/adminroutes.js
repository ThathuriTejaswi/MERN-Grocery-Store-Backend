const controller=require("../controllers/admincontroller")
const express=require("express")
const router=express.Router()
router.post("/admin-reg",controller.adminRegister)
router.post("/adminlogin", controller.adminlogin)
module.exports = router;