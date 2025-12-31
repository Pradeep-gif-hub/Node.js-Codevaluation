// import add from "./default_ESM.mjs";
// console.log(add(2,3));        

import math from "./ES_modules.js";
console.log(math.add(2.4,5));
console.log(math.subtract(3,5));

// ES Modules is the ECMA Scripts standard for modules
// it was introduced with ES2015
// Nodes js 14 and above support ES Modules
// Instead Of modules.exports we use the export keyword;
// The export can be default or named;
// If it is a default export, we can assign any more while importing 
// If it is named export, the import, name must be same
