const express=require("express");
const connect = require("./confing/db");
const User_Route = require("./routes/User.Route");
const cookie=require("cookie-parser");
const Pro_Route = require("./routes/Product.Route");
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',(__dirname+"/views"))
app.use(cookie())

app.use("/user",User_Route)
app.use("/product",Pro_Route)

app.listen(8090,()=>{
    console.log("Server 8090");
    connect()
})