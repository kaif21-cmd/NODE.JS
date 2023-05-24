const express=require('express')
const path=require('path')
const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.use((req,res)=>{
    res.status(404)
    res.send(`<h1>ERROR ERROR ERROR</h1`)
})
app.listen(3002,()=>{
    console.log("App listening on port 3002");
})