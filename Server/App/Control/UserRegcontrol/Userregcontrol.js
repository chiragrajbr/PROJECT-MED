const usermodel=require("../../Model/UserRegister/usermodel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const usercontroller={}
//to register
usercontroller.register=(req,res)=>{
    const body=req.body
    
   const reg=new usermodel(body)
    bcrypt.genSalt()
            .then((salt)=>{
                        bcrypt.hash(reg.password,salt)
                            .then((encrypted)=>{
                                reg.password=encrypted
                                reg.save()
                                        .then((user)=>{
                                            res.json(user)
                                        })
                                        .catch((error)=>{
                                            res.json({"error":error})
                                            
                                        })
                                    })     
                })
    .catch((err)=>{
        console.log(err.message)
    }) 
}
//to get all users
usercontroller.allusers=(req,res)=>{
    const id=req.params.id
    usermodel.findById(id)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

//to login
usercontroller.login=(req,res)=>{
   
    const body=req.body
  
    usermodel.findOne({email:body.email})
                   .then((user)=>{
                       bcrypt.compare(body.password,user.password)
                       .then((response)=>{
                            if(response){
                               //take required parameters
                               const token={
                                   id:user._id,
                                   name:user.name,
                                   email:user.email
                               }
                               //.sign requires 3 parameters 1-token 
                           const generatedtoken = jwt.sign(token,"mid",{expiresIn:"5d"})
                           res.json({
                               token:generatedtoken
                           })

                           }else{
                               res.json("invalid password")
                           }
           
       })
       .catch((err)=>{
           res.json(err)
       })
   })
   
}

module.exports=usercontroller