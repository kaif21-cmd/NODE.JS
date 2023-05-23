// showing file to server...
//3rd tarika 
const fs=require("fs")
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    var fs=require("fs");
    const rstream=fs.createReadStream("input1.txt"); //readablestream read data in continous manner
    rstream.pipe(res); //data transfer just only in one line

});
server.listen(8002,"127.0.0.1",()=>{
    console.log(" hey! kaif shaikh server is running")
})