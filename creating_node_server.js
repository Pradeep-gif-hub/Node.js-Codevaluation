const http= require("node:http");
const server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type": "text/plain"});// a successful Response
    response.end("Hello World");
});

server.listen(4000,()=>{
    console.log("Server is loading on port 4000");
});
