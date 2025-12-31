// Each Module has its scope..
// Each actually has MEMORY CACHING and from that it helps not contradicting the function name

// before a modules code is executed Node.js will wrap it with a  funCtion wrapper that 
// provides the module cope.
// This saves us from having to worry about CONFLICTING the variables or function there is 
// proper encapsulating and reusability is unaffected

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)