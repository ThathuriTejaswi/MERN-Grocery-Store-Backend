const mongoose=require("mongoose")
const category_Enum=[
    "Vegetables","fruits","food-grains"]
const unit_Enum=["500g","1kg","2kgs","5kgs"]

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    category:{
        type:String,
        enum:category_Enum
    },
    unit:{
        type:String,
        enum:unit_Enum
    },
    image:{
        type:String,

    },
    isActive:{
        type:Boolean
    }


},{timestamps:true})

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);