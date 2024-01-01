const Pro_Model = require("../models/product.Schema")

const addproUi=(req,res)=>{
    res.render("productForm")
}
const addPro=async(req,res)=>{
    let data=await Pro_Model.create(req.body)
    res.json(data)
}
const myui=(req,res)=>{
    res.render("myProducts")
}
const proui=async(req,res)=>{
    let data=await Pro_Model.find({UserId:req.body.UserId})
    res.json(data)
}
const prodel=async(req,res)=>{
    let {id}=req.params
    let data=await Pro_Model.findByIdAndDelete(id)
    res.json(data)
}
const allproducts=(req,res)=>{
    res.render("productList")
}
const allpro=async(req,res)=>{
    let data=await Pro_Model.find()
    res.json(data)
}
const cateui=async(req,res)=>{
    res.render("categoryList")
}
const allcate=async(req,res)=>{
    let data=await Pro_Model.find()
    res.json(data)
}
const catedel=async(req,res)=>{
    let {id}=req.params
    let data=await Pro_Model.findByIdAndDelete(id)
    res.json(data)
}
module.exports={addproUi,addPro,proui,prodel,myui,allproducts,allpro,cateui,allcate,catedel}