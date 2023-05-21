const os=require("os");
//arch of os model..
console.log(os.arch());
//finding the host name
console.log(os.hostname())
const freeMemory=os.freemem();
//platform
console.log(os.platform())
//temp folder
console.log(os.tmpdir())
//os type
console.log(os.type())
//console.log(freeMemory);
console.log( `${freeMemory / 1024/ 1024/ 1024}`) //backtick..
//total memory
const totalMemory=os.totalmem();
console.log( `${totalMemory / 1024/ 1024/ 1024}`)




