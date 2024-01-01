const UserModel = require("../models/User.Schema")
const jwt = require("jsonwebtoken")

const RegisterUi = (req, res) => {
    res.render("register")
}
const register = async (req, res) => {
    let { username } = req.body
    let data = await UserModel.findOne({ username: username })
    if (data) {
        res.redirect("/user/login")
    }
    else {
        let data = await UserModel.create(req.body)
        var token = jwt.sign({ id: data._id,role:data.role }, 'ecommerce');
        res.cookie("token", token).redirect("/product/products")
    }
}
const loginUi = (req, res) => {
    res.render("login")
}
const login = async (req, res) => {
    let { username, password } = req.body
    let data = await UserModel.findOne({ username: username })
    if (data) {
        if(data.password==password){
            var token = jwt.sign({ id: data._id,role:data.role }, 'ecommerce');
            res.cookie("token", token).redirect("/product/products")
        }
        else{
            res.json("Password is rong")
        }
    }
    else {
        res.redirect("/user/register")
    }
}
const logout = (req, res) => {
        res.clearCookie("token").redirect('/user/login');
}
const userdata=async(req,res)=>{
    let data=await UserModel.find({id:req.body.id})
    res.send(data)
}

module.exports = { RegisterUi, register, loginUi, login, logout ,userdata}