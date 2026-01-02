// CallBack in Microtask Queue  ( eihter the Process.newTick() or Promise.response.then()
// is executed first over the Calls in the Timer Queue

setTimeout(()=> console.log("Settime Out1"),0);
setTimeout(()=> console.log("Settime Out2"),0);
setTimeout(()=> console.log("Settime Out3"),0);

process.nextTick(()=> console.log("This is the nextTick()"));
setTimeout(()=> console.log("Settime Out3"),0);
process.nextTick(()=> console.log("This is the nextTick()"));