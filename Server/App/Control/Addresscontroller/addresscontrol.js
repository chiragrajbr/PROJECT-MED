const address=require("../../Model/Addressmodel/accountmodel")
const addresscontroller={}
//to add account details
addresscontroller.add=(req,res)=>{
        const body=req.body
        const data=req.user
       let addaddress= new address(body)
       addaddress.userId=data.id
        addaddress.save()
                    .then((response)=>{
                        res.json(response)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
       
}
//to get username and email
addresscontroller.userdetails=(req,res)=>{
    res.json(req.user)
}
module.exports=addresscontroller