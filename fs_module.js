// FILE SYSTEM allows u to work with file system..

const fs=require("node:fs")

const fc= fs.readFileSync("./file.txt","UTF-8");// "UTF-8" Character Encoding if removed then the Buffer output 

// console.log(fc);

// fs.readFile("./file.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });
// console.log("Third");


fs.writeFileSync("./greet.txt","Hello Pradeep, How u dealing with Node.js")
