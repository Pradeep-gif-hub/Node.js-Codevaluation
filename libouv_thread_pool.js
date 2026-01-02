// Libouv actually passes the task that is cant be passed by the THREAD POOL 
// Crypto actually results the time required to execute the code 

const crypto=require("node:crypto");

// Passed Synchronously thats why Blocks the remaining code- HENCE T,2T,3T,4T and so time required
// const start=Date.now();
// crypto.pbkdf2Sync("Password","Salt",100000,512,"sha512"); // Password Based Key Derived Function 2
// crypto.pbkdf2Sync("Password","Salt",100000,512,"sha512"); 
// crypto.pbkdf2Sync("Password","Salt",100000,512,"sha512");
// console.log("Hash",Date.now()-start); 


// Passes Asynchronously thats why never blocks the code- hence T,T,T,T,T,T
const start=Date.now();
const maxcall=2;
for(let i=0;i<maxcall;i++){
    crypto.pbkdf2("Password","Salt",100000,512,"sha512",()=>{
        console.log(`Hash:${i+1}`, Date.now()- start)
    });
}
// Prints papprox same time for everycall since doesnt block the code executeion all gets printed aprallely