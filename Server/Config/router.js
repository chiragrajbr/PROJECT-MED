const express=require("express")
const route=express.Router()
const usercontroller=require("../App/Control/UserRegcontrol/Userregcontrol")
const auth=require("../App/Authorize/authorize")
//API'S
route.get("/allusers",usercontroller.allusers)
route.post("/register",usercontroller.register)
route.post("/login",usercontroller.login)
route.get("/auth",auth.tokenverify)
module.exports=route
