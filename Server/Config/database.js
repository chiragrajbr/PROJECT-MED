const mongoose=require("mongoose")
const userdatabase=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/medkit")
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch(()=>{
        console.log("database not connected")
    })
}
module.exports=userdatabase