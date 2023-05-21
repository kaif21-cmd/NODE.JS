const http=require("http");


const myServer=http.createServer((req,res)=>{
 console.log("New request Recievce");
 //console.log(req.headers);
 //console.log(req.url);
 res.end("Hello from Server kaif_shaikh");
});
myServer.listen(8000,()=> console.log("Server started!"));
