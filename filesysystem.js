//if we want to create new file.
const fs = require("fs"); //required file to use file system. sync for using synchronus version..
//creating new file
fs.writeFileSync("read.txt", "welcome to kaif shaikh");//agar file exist karti hai to uska name agar ni krti to simple name add kro file ka or data add krdo

fs.writeFileSync("read.txt", "hi my name is kaif");// here you can update your data.. in same file.

fs.appendFileSync('read.txt', " How are you i am fine Thank you")// adding or extra data in to file with help of append keyword
//fs.readFileSync('read.txt') //if you want read data from the file just write the name of the file. and read it
const buf_data = fs.readFileSync("read.txt")
console.log(buf_data);
// node js. includes an additional data type called buffer
// not available in browser javascript
// buffer is mainly used to store binary data,
// while reading the file or receiving packet over the network.

fs.renameSync("read.txt", "readwrite.txt") // if want to rename the file name we  change it by add new name
//fs.mkdirSync("kaif")//for making new folder.
fs.writeFileSync('kaif/bio.txt',"My name is kaif and im computer science engineering studuent ") // this txt file is add into kaif folder with the help of this we can add any file to any folder
fs.appendFileSync('kaif/bio.txt',"please visit my github and linkdln id") //with the help of append we add or update data into existing file.

// if we want to read the data.. just make one variable store the data and read it...
const data=fs.readFileSync('kaif/bio.txt',"utf-8");
console.log(data)
// if we want to rename the file. form previous name to new name...
fs.renameSync("kaif/bio.txt","kaif/mybio.txt")

//for deleting the file
//fs.unlinkSync("kaif/mybio.txt")





