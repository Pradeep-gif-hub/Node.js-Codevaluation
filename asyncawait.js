const fs= require("node:fs/promises");
async function readFile(){
    try{
        const data=await fs.readFile("file.txt","utf-8");
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
readFile();

// Prefered over the callback and promises to return the value
// since aquire lesser memory 