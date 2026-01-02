const http= require("node:http");
const superHero={
        first: "Hacking Server ",
        second:"Normal Server",
    }
const server=http.createServer((request,response)=>{

    response.writeHead(200,{"Content-Type": "application/json"});// a successful Response
    response.end(JSON.stringify(superHero));
});

server.listen(5000,()=>{
    console.log("Server is loading on port 5000");
});
