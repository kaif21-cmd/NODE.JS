// showing file to server...
//2nd tarika 
const fs=require("fs")
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    var fs=require("fs");
    const rstream=fs.createReadStream("input1.txt"); //readablestream read data in continous manner
    rstream.on('data',(chunkdata)=>{//if we have 1000 line of code out of 1000 5 line execute or read this will save in 'data' (chunkdata)
    res.write(chunkdata);//passing the data 
    });
    rstream.on('end',()=>{
        res.end();
    });    //it will read the data till the end line of document
    rstream.on('error',(err)=>{
        res.end("File not found");//if any error in the file 
    });

});
server.listen(8001,"127.0.0.1",()=>{
    console.log(" hey! kaif shaikh server is running")
})