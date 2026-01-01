const fc=require("node:fs/promises");

console.log("First");
fc.readFile("file.txt","utf-8")
.then((data)=> console.log(data))
.catch((error)=>console.log(error));
console.log("Second");
