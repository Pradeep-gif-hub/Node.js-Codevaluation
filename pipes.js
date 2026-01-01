// from readable streams to writable streams 


// TYPES OF STREAMS
// 1. READABLE, 2. WRITABLE 3.DUPLEX- ( Both read and Write)


const fs= require("node:fs");
const gz= require("node:zlib");

const gzi= zlib.createGzip();

const readableS= fs.createReadStream("./file.txt",{
encoding:"utf-8",
})

const writtableS= fs.createReadStream("./file2.txt");

readableS.pipe(writtableS);

// glib is used 