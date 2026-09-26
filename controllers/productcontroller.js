const Product= require("../models/product")
exports.createProduct=async(req,res)=>{
    try{
        const {name,desc,price,category,unit}=req.body
        const image=req.file?`/uploads/${req.file.filename}`:null
        const products=await Product.create({
            name,desc,price,category,unit,image
        })
        return res.status(200).json({msg:"products added",products})
    }
    catch(error){
console.error(error.message)
return res.status(500).json({ message: error.message });
    }
}
exports.getproducts=async(req,res)=>{
    try{
        const newproducts=await Product.find()
        return res.status(201).json({msg:"success",newproducts})  
    }
    catch(error){
console.error(error.message)
return res.status(500).json({msg:error.message});
    }
}