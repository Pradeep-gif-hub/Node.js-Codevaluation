// Although both crypto.pbkdf2 adn https.request are ASYNCHRONOUS, https.request method does not seem to use thread pool
// https.request does not seem to be affected by the number of CPU cores either
// using a any network server  https.request like google or so the avergae time was same for any number of callbacks
// like libouve ahs same for 4 calls but if more than 4 then it actaully takes more time
// where are network io has smae mamount of time wthout any previous.env.UV_THREADPOOL_SIZE increaement


// https.request  is a networl input/output operations and not a cpu bound operation it doesnt use the thread pool
// libouv instead delegates the work to the OPERATING SYSTEM KERNEL and whever possible, it will poll the Kernel and see if the 
// request has complated 


// In Node.js async methods are handled by LIBUV 
// using two approaches as 1. Native Async Mechanism   2. ThreadPool
// ex- NETWORK-IO