const express=require("express")
const router=require("./Config/router")
const userdatabase=require("./Config/database")
const cors=require("cors")
const port=3006
const app=express()
app.use(cors())
app.use(express.json())


userdatabase()

app.use(router)


app.listen(port,()=>{
    console.log("server is running in the port",port)
})