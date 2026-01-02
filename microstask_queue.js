
// Sync takes priority over Async JS codes
console.log("Log 1");
process.nextTick(()=> console.log("This is the nextTick()"));
console.log("Log 2");

// All the callBack in  The nexttick is prioritized over the Promise.resolve 

Promise.resolve().then(()=> console.log("This is resolve "));
process.nextTick(()=> console.log('Nexttick'));

// Process.nextTick() is discouraged as it can cause the rest of the event loop to starve if u endelsessy call
// process.nexttick. The contrl will never make it past the MICROTASK QUEUE;
