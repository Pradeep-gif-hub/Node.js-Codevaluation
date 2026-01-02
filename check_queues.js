// Check Ques are executed after the microtask, I/O and Timer Queues are executed 
// Microtask- 1. Process.nextTick() then Promise.resolve().then()
// I/O Queue mainly for the file handling
// Timer Queues are mainly for the Settimeinterval, settimeout and so 
// Check Queues are for setimmediate()

