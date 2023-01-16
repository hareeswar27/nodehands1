const http=require("http");
const express=require("express")

const app=express();
http.createServer(function(req,res){
    res.write("<h1>Html format</h1>")
    res.end();
})
.listen(5000);

app.get('/',function(req,res){
    res.send({message:"This is Json forrmat"})
})
.listen(5001)