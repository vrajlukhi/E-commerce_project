const {Router}=require("express")
const { IsAuth } = require("../middleware/Auth")
const { addproUi, addPro, proui, prodel, myui, allproducts, allpro, cateui, allcate, catedel } = require("../controller/pro.controller")
const Pro_Route=Router()

Pro_Route.get("/addpro",IsAuth,addproUi)
Pro_Route.post("/addpro",IsAuth,addPro)
Pro_Route.get("/myui",IsAuth,myui)
Pro_Route.get("/proui",IsAuth,proui)
Pro_Route.delete("/delete/:id",IsAuth,prodel)
Pro_Route.get("/products",IsAuth,allproducts)
Pro_Route.get("/allpro",IsAuth,allpro)
Pro_Route.get("/cateui",IsAuth,cateui)
Pro_Route.get("/allcate",IsAuth,allcate)
Pro_Route.delete("/catedel/:id",IsAuth,catedel)

module.exports=Pro_Route    