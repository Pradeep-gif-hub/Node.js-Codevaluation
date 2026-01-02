const fs=require("node:fs");

setTimeout(()=> console.log("This is the Timer Queue"),0);
fs.readFile(__filename,()=>{
    console.log("This is the I/O Queue");
})

// IO_ Queues are executed after the Microtask and Timer Queues are executed
// Mainly once the Timer Quese are executed with 0ms then the ORDER OF EXECUTION between the 
// IO Queue and Timer Queue is not decided
c

