const jwt=require("jsonwebtoken");
const UserModel = require("../models/User.Schema");

const IsAuth = (req, res, next) => {
    let token = req.cookies.token
    if (token) {
        let decoded = jwt.verify(token, 'ecommerce');
        req.body.UserId=decoded.id
        next()
    }
    else{
        res.redirect("/user/login")
    }
}

const role=async(req,res,next)=>{
    let {username}=req.body
    let data=await UserModel.findOne({username:username})
    if(data.role=="Admin"){
        next()
    }
    else{
        res.json("You are not access this page")
    }
}

module.exports={IsAuth,role}