const app =require('express')();
const PORT =8080;
app.listen(
    PORT,
    ()=> console.log(`server running on ${PORT}`)
);
app.get(`/fruits`,(req,res)=>{
    res.send("Mango and Banana")
});
app.get(`/fruits1`,(req,res)=>{
   res.send({
    apple:2,
    banana:3,
   })
});
app.get(`/kaif`,(req,res)=>{
    res.send({
     Name:"Kaif_siddique",
     Department:"Computer Science",
     Enrollment:"2020-310-153",
     section:"C"
    })
 });
 app.get(`/Shahan`,(req,res)=>{
    res.send({
     Name:"Shahan_khan",
     Department:"Computer Science",
     Enrollment:"2020-310-216",
     section:"D"
    })
 });
 app.get(`/Zara`,(req,res)=>{
    res.send({
     Name:"Zara rizwan",
     Department:"Computer Science",
     Enrollment:"2020-310-249",
     section:"D"
    })
 });
 app.get(`/Shahrukh`,(req,res)=>{
    res.send({
     Name:"Shahrukh Mirza",
     Department:"Computer Science",
     Enrollment:"2020-310-207",
     section:"D"
    })
 });
 app.get(`/zaid`,(req,res)=>{
    res.send({
     Name:"Zaid Ahsan",
     Department:"Computer Science",
     Enrollment:"2020-310-248",
     section:"D"
    })
 });
 app.get(`/Anas`,(req,res)=>{
    res.send({
     Name:"Anas ali",
     Department:"Computer Science",
     Enrollment:"2020-310-031",
     section:"A",
     Name2:"Harun",
     department:"Computer science",
     location:"Shaheen bagh",
    })
 });