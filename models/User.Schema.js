const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    role:String
})
const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel