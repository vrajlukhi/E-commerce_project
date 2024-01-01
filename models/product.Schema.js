const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    title:String,
    desc:String,
    img:String,
    price:String,
    category:String,
    UserId:String
})
const Pro_Model=mongoose.model("product",ProductSchema)
module.exports=Pro_Model