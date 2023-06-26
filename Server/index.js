const express=require("express")
const router=require("./Config/router")
const userdatabase=require("./Config/database")
const port=3006
const app=express()
app.use(express.json())

userdatabase()

app.use(router)


app.listen(port,()=>{
    console.log("server is running in the port",port)
})