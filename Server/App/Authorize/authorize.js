const usermodel=require("../Model/UserRegister/usermodel")
const jwt=require("jsonwebtoken")
const auth={}
auth.tokenverify=(req,res,next)=>{
    const token=req.header("Authorization")
    try{
        const authtoken=jwt.verify(token,"mid")
        usermodel.findById({_id:authtoken.id})
        .then((user)=>{
            req.user=user
            res.json("verified successfull")
            next()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        res.json(err)
    }
}
module.exports=auth
