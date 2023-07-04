const express=require("express")
const route=express.Router()
const usercontroller=require("../App/Control/UserRegcontrol/Userregcontrol")
const auth=require("../App/Authorize/authorize")
const addresscontroller=require("../App/Control/Addresscontroller/addresscontrol") 
const productcontrol=require("../App/Control/Productcontrol/productcontrol")
//API'S
route.get("/allusers",usercontroller.allusers)
route.post("/register",usercontroller.register)
route.post("/login",usercontroller.login)
route.get("/auth",auth.tokenverify)
route.post("/address",auth.tokenverify,addresscontroller.add)
route.get("/userdetails",auth.tokenverify,addresscontroller.userdetails)
route.post("/medicine",productcontrol.createitem)
route.get("/getallmedicine",productcontrol.getallmedicine)

module.exports=route
