function greet(name){
    console.log(`Hello ${name} `);
}

function higherOrderFunction(callback){
    const name="Pradeep";
    callback(name);
}

higherOrderFunction(greet);


// Callback function is that we passed/ returned as argument in diff fucniton called as CALLBACK FUNCTION
// HigherOderFucntion that accepts the callback fucntion as argument function adn returns the function 

// Call back 2 types - Syncronous and Asyncrounous 

// Syncrounour get solved imedialty once executed as sort, filter and map
// Asyncournour callbacks is often used to continue after asyn task is done ( delayed until a Event is called or compledted)
// - Data fetching from database, fata from file, handling netweok 


// In js fucntiosn are the first class objects meaning that a fucntion can be passed as ARGUMENT or Retrun 
// as the vlaue 
// fucntion can also be returned as values from other fucntions 