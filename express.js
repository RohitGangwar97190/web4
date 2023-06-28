const express =require('express');
const app =express();
app.get('',(req,resp)=>{
    console.log("data sent by the users =>>",req.query.name)
    resp.send("welcome,"+req.query.name);
});
app.get('/about',(req,res)=>{
    res.send('welcome,this si about page');
});
app.get('/help',(req,res)=>{
    res.send('welcome,this si help page');
});
app.listen(5000);