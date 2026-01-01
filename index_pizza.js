const PizzaShop= require("./pizza_shop.js");
const Drinks=require("./drinks_module.js");
const drink= new Drinks();

const pizza= new PizzaShop();
pizza.on("order",(size,topping)=>{
 console.log(`Order Received! Baking a ${size} and with ${topping}`);
 drink.serveDrinks(size);
});

pizza.order("Large","Mushroom");
pizza.displayOrder();
