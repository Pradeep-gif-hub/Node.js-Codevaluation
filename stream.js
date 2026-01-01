// TYPES OF STREAMS
// 1. READABLE, 2. WRITABLE 3.DUPLEX- ( Both read and Write)


const fs= require("node:fs");

const readableS= fs.createReadStream("./file.txt",{
encoding:"utf-8",
})

//const writtableS= fs.createReadStream("./file2.txt");

readableS.on("data",(chunk)=>{
    console.log(chunk);
   // writtableS.write(chunk);
});