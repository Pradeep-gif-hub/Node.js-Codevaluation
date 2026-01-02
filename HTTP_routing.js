const http= require("node:http");

const server=http.createServer((request,response)=>{
   // provides the routes like /about and s/api and so
   // request.method GET,PUT,POST and DELETE
   if(request.url=="/"){
    response.writeHead(200,{"content-type":"text/plain"});
    response.end("Home Page");
   }
   else if(request.url=="/about"){
     response.writeHead(200,{"content-type":"text/plain"});
    response.end("About Page");
   }
   else if(request.url=="/api"){
    response.writeHead(200,{"content-type":"text/json"});
    response.end(JSON.stringify({
        firstName:"Pradeep",
        secondName:"Awasthi",
    }))
   } else{
    response.writeHead(404);
    response.end("Page Not found");
   }

});

server.listen(3000,()=>{
 console.log("Server Running on the port 3000");
});