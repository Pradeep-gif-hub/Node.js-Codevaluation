const http= require("node:http");
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