const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const user=new mongoose.Schema({
   name:{
    type:String,
    required:[true,"name is needed"]
   },
   email:{
    type:String,
    required:true,
    unique:true,
    validate:{
        validator:function(value){
            return isEmail(value)
        },
        message:function(){
            return "enter valid email format"
        }
    }
    
   },
   password:{
    type:String,
    required:true
}
})

const usermodel=mongoose.model("usermodel",user)
module.exports=usermodel



