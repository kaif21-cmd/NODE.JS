/*JS0N STAND FOR JAVASCRIPT OBJECT NOTATION
JSON IS LIGHT WEIGHT
FORMAT FOR STORING THE DATA
JSON IS OFTEN USED WHEN DATA IS SENT FROM A SEVER TO A WEBPAGE
*/
const fs=require("fs")
const bioData={
    name:"kaif",
    age:22,
    department:"Computer Science",
};
console.log(bioData.age)

const jsonData=JSON.stringify(bioData) // STRINGIFY USED FOR TO CONVERT OBJECT TO JSON 
console.log(jsonData)// in json format we can not fetch the property

const objData = JSON.parse(jsonData)// STRING TO OBJECT CONVERT
console.log(objData)
console.log(objData.age) //in object format we can fetch the object property

//--------------------------------
/* main  task covert it json
2. dusre file me add krna
3. read the file
4. convert back to again object 
*/

const jsonData1 =JSON.stringify(bioData)
fs.writeFile("json1.json", jsonData,(err)=>{   //file name with .json extension data name which you want read
    console.log("done")    
});

//read the data
fs.readFile("json1.json","utf-8",(err,data)=>{
   console.log(data)
   //convert to object
const orgData=JSON.parse(data)
console.log(orgData)
});



