const mongoose=require("mongoose")
const productmodel=new mongoose.Schema({
    image:{
        type:String,
        required:[true,"image is required"]
    },
    name:{
        type:String,
        required:[true,"name is required"]
    },
    type:{
        type:String,
        required:[true,"type is required"]
    },
    price:{
        type:String,
        required:[true,"price is required"]
    }
})
const medimodel=mongoose.model("medimodel",productmodel)
module.exports=medimodel