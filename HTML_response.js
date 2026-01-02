const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((request,response)=>{
 response.writeHead(200,{"content-type":"html"});
const html=fs.readFileSync("./index.html","utf-8");
//  fs.createReadStream(__dirname+"/index.html").pipe(response);
 response.end(html);
});

server.listen(4500,()=>{
  console.log("Server is running on port 4500");
});
