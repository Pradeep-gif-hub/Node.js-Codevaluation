const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((request,response)=>{
    const name="Pradeep";
 response.writeHead(200,{"content-type":"html"});
 let html=fs.readFileSync("./index.html","utf-8");
 html=html.replace("{{name}}",name);
//  fs.createReadStream(__dirname+"/index.html").pipe(response);
 response.end(html);// as response
});

server.listen(4500,()=>{
  console.log("Server is running on port 4500");
});
