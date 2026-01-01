const EventEmitter= require("node:events");
const Drinks=require("./drinks_module.js");
const drink= new Drinks();

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber=0;
    }
    order(size,topping){
        this.orderNumber++;
        console.log(`Order Received! Baking a ${size} and with ${topping}`);
        this.emit("Order",size,topping);
        drink.serveDrinks(size);
    }
    displayOrder(){
        console.log(`Current order number: ${this.orderNumber}`);
    }

};
module.exports=PizzaShop;