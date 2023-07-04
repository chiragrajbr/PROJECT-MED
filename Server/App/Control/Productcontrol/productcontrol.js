const medimodel=require("../../Model/Productmodel/productmodel")
const productcontrol={}
productcontrol.createitem=(req,res)=>{
    const body=req.body
   new medimodel(body).save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}
//get all item
productcontrol.getallmedicine=(req,res)=>{
    medimodel.find()
    .then((response)=>{
        res.json(response)
        
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports=productcontrol