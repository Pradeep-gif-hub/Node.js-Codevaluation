const buffer= new Buffer.from("Pradeep"); // stores only 7 letters if given extras goes as buffer
console.log(buffer); // Hexagonal ( 56 from the entry 86 from toJSON())
buffer.write("Awasthiji");// only rendor awasthi ( 7 letter )
console.log(buffer.toJSON());
console.log(buffer.toString());
