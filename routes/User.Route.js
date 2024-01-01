const {Router}=require("express")
const { RegisterUi, register, loginUi, login, logout, userdata } = require("../controller/User.Controller")
const { IsAuth, role } = require("../middleware/Auth")
const User_Route=Router()

User_Route.get("/register",RegisterUi)
User_Route.post("/register",register)
User_Route.get("/login",loginUi)
User_Route.post("/login",login)
User_Route.get("/logout",IsAuth,logout)
User_Route.get("/userdata",IsAuth,role,userdata)

module.exports=User_Route