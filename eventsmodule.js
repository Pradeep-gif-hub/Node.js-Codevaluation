const EventEmitter=require("node:events");
const emitter=new EventEmitter();
emitter.on("Order-Pizza", (size,topping)=>{
    console.log(`Order Received !! Baking a ${size} Pizza with a ${topping}.`);
})
emitter.emit("Order-Pizza","large","Mushroom");
