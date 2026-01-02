// Node is A single threaded 
// no matter how many cores are there node only uses a single thread of ur CPU


// Cluster Modules enables the creation of child processes(also called workers) that run simultaneously

// Also created worker share the same Server Port
// cluster master makes various workers to work adn unblock the code od execution
// workers are in charge of handling of incoming requests and reading fiels.

const cluster =require("node:cluster");
const http=require("node:http");
const OS= require("node:os");
console.log(OS.cpus().length);

if(cluster.isMaster){
    console.log(`Master Process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else{
    console.log(`Worker ${process.pid} started`);
    const server=http.createServer((request,response)=>{
        if(request.url=="/"){
            response.writeHead(200,{"content-type":"text/plain"});
            response.end("Home Page");
        } else if(request.url=="/slow-page"){
            for(let i=0;i<6000;i++){
          
            } // Simulate the CPU Work
            response.writeHead(200,{"content-type":"text/plain"});
            response.end("Slow Page");
        }
    });
    
    server.listen(8000,()=> console.log("Server is running on the port number 8000"));
}


