// CommonJS

// Each file is treated as Module
// Variables, functions, classes are not accessible to other file by default

// We have to do it by module.exports and exports

// module.exports is preferred over the exports

// Earlier NodeJS defaulted to COMMONJS as its module system

// As if ES2015 JS does have a standardized module system as part of the language itself;

// that module is called as ECMA Module or ECM module or ES Module


const add=(a,b)=>{
    return a+b;
};
const subtract=(a,b)=>{
    return b-a;
};

export default{
    add,
    subtract
};