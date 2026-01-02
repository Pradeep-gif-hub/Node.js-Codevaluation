// CallBacks in the micro Queue are executed first over the Call of the I/O queue(reading fiel)..

const fs= require("node:fs"); // TASK OF IO Queue

fs.readFile(__filename,()=>{          // Task of MicroTask Queue
    console.log("This is the file being read");
})

process.nextTick(()=>{          // Task of MicroTask Queue
    console.log("The NextTICK task is queued");
})

Promise.resolve().then(()=>console.log("This is the Promise resolve Queue"));
