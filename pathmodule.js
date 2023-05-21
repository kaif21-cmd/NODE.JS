const path= require("path")
console.log(path.dirname('C:/Users/Acer/Desktop/node.js/pathmodule.js'))//we find dirname 
console.log(path.extname('C:/Users/Acer/Desktop/node.js/pathmodule.js'))// find extension of the file
console.log(path.basename('C:/Users/Acer/Desktop/node.js/pathmodule.js'))// find file name

//here we find all with help of path.parse
//[root_drive,dir_folder,base_file,ext_file,name_file]
console.log(path.parse("C:/Users/Acer/Desktop/node.js/pathmodule.js"))

//if we want only one object info so..
const mypath=path.parse('C:/Users/Acer/Desktop/node.js/pathmodule.js')
console.log(mypath.root)
console.log(mypath.name)
console.log(mypath.ext)
console.log(mypath.dir)
console.log(mypath.base)