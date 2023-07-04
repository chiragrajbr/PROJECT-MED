const usermodel=require("../Model/UserRegister/usermodel")
const jwt=require("jsonwebtoken")
const auth={}
auth.tokenverify=(req,res,next)=>{
    const token=req.headers.authorization
    let tokendata;
    try{
        tokendata=jwt.verify(token,"mid")
        usermodel.find({email:tokendata.email})
        .then(()=>{
            req.user=tokendata
            next()
        })
        .catch((err)=>{
            console.log({"error":err})
        })
    }
    catch(err){
        res.json({"error":err})
    }
}
module.exports=auth
