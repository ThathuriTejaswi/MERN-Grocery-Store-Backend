const controller=require("../controllers/cartcontroller")
const express=require("express")
const email=require("../middlewares/emailmiddleware")
const router=express.Router()
router.post("/addtocart",email.emailmiddleware,controller.addToCart)
router.get("/cartdetails",email.emailmiddleware,controller.getCartItems)
router.put("/update-cart", email.emailmiddleware, controller.updateQuantity)
router.delete("/delete/:productId", email.emailmiddleware, controller.removeFromCart)
module.exports=router
