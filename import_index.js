// Structuring of Object

const math=require("./import_export");
console.log(math.add(4,5));
console.log(math.subtract(9,3))


// Destructuring of Object

const math=require("./import_export");
const {add,subtract}=math;
console.log(add(4,5));
console.log(subtract(6,9));

// (function(exports,require,module,--filename,--direname){
// const superhero="Batman";
// console.log(superhero);
//})