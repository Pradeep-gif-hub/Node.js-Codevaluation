// Basically the V8 engine ( javascript code encoding engine) ahs the MEMORY HEAP and the CALLBACK STACK 
// the variables adn function get saved in memory heap and passed to the callback stack
// the callback being stack follows the (LIFO) means passes one synchronous task one at time and executes the value


// if any asynchronous task is there it get passed to the LIBUV and it performs the task 
// and hence till it executes the task, the other task of the callback stack is executes 
//  once all the task of the callstack is done and then the LIBUV passes the result to its callstack of its
// thread-loop result through the main-loop and hence that output get executes as responses.


// EVENT LOOP

//its written in c as part of  LIBUV and design pattern thats coordinates the execution of synchronous
//  and asynchronous code un Node.js

// Timer callbacks are executes first over the I/O Callbacks and almost the settime adn settimeinterval are prioritized 
// aS PER THE Promise Queue and network queue is completed