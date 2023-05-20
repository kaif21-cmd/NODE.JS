const fs=require("fs")
fs.writeFile("read.txt","Today is the Awesome day",
(err) => {
 console.log("file is created")
console.log(err);
});
//----------------------------------------

//const fs=require("fs")
//with the help of this we can append the data
fs.appendFile("read.txt","hello my self mohd kaif siddique",
(err)=>{        //callback function call for checking the error
    console.log('task completed.');
});


//if we want add more data
//-----------------------------------------------


fs.appendFile('read.txt',"hello im learning node js",
(err) => {
  console.log('data added succesfully')
});

//if we want to read file without buffer.

fs.readFile('read.txt','UTF-8',(err,data)=>
{
 console.log(data)
});



// making new folder
//const fs=require("fs")
fs.mkdir("kaifshaikh",(err)=>{
  console.log("Folder created.")
});

// create file to folder
//const fs = require("fs")
fs.writeFile("./kaifshaikh/myself.txt", "My name is Mohd Kaif Siddique and im computer science engineering student", (err) => {
  console.log("Files is created")
});


// if want add more data
//const fs = require("fs")
fs.appendFile("./kaifshaikh/myself.txt", "  My hobbies is to learning coding", (err) => {
  console.log("File data appended")

});


//for reading the data 
//const fs=require("fs")
fs.readFile("./kaifshaikh/myself.txt",'utf-8',(err,data)=>{
console.log(data)

});

//rename file

fs.rename("./kaifshaikh/myself.txt", "./kaifshaikh/myself1.txt",(err)=>{
  console.log("Rename done")

});

//Deleting file

fs.unlink("./kaifshaikh/myself1.txt",(err)=>{
  console.log("File deleted")
});

//Folder Deleted
/*
fs.rmdir("./kaifshaikh",()=>{
  console.log("Folder Deleted")

});
*/
//-----------
//-----------------Kaif Shaikh Siddique Jamia Hamdard...............




