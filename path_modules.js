// THE PATH MODULE PROVIDES UTILITIES FOR WORKING WITH FILE AND DIRECTORY PATHS....

// path.basename
// path.extname
// path.parse
// path.format
// path.join
// path.isAbsolute

const path= require("node:path");
console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(path.format(path.parse(__filename)));
console.log(path.basename(__dirname));

console.log(path.isAbsolute(__dirname));


console.log(path.join("folder1","folder2","folder3"));

console.log(path.join(__dirname,"data.json"));
console.log(path.join(__filename,"data.json"));


// Makes it perfectly clear that the import is a Node.js builtin Module
// Makes the import identifier a valid absolute URL
// Avoids conflicts for future NODEJS BuiltinModule

