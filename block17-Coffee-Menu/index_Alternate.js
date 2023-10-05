const coffeeMenu = require("./coffee_data");

////This is an alternateive file where the outputs are the entire object rather than just the name.

////Prompt 2
//This will get all the "name" propertys from "coffeeMenu" and put it into the variable.
//I'm pretty sure this is what the 2nd promp wants from me, but im honostly not sure.
const drinks = coffeeMenu.map((element) => element);

console.log(drinks);

////Prompt 3
//This filters through "coffeeMenu" and puts only the drinks that cost 5 or less inside the variable.
const drinksFiveUnder = coffeeMenu.filter((drinks) => drinks.price <= 5);

console.log(drinksFiveUnder);

////Prompt 4
//This filters through "coffeeMenu" and puts only the drinks that cost an even number inside the variable.
const drinksEven = coffeeMenu.filter((drinks) => drinks.price % 2 === 0);

console.log(drinksEven);

////Prompt 5
//This combines all the price propertys from "coffeeMenu" and and puts the sum in the variable.
const initialValue = 0;
const drinksTotal = coffeeMenu.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
);

console.log(drinksTotal);

////Prompt 6
//This filters through "coffeeMenu" and puts only the drinks that are seasonal inside the variable.
const drinksSeasonal = coffeeMenu.filter((drinks) => drinks.seasonal);

console.log(drinksSeasonal);

////Prompt 7
//This filters through "coffeeMenu" and gets the drinks that are seasonal and adds "with imported beans" in the name property.
//I'm honostly not sure if this is what it wants me to do.
const drinksBeans = coffeeMenu.filter((drinks) => {
  if (drinks.seasonal === true) {
    return (drinks.name = `${drinks.name} with imported beans`);
  }
});

console.log(drinksBeans);

////Prompt 7
//This utilizes Promopt 6 variable to do this instead of having to check if it is seasonal again.
//I'm honostly not sure if this is what it wants me to do.
const drinksBeans2 = drinksSeasonal.filter(
  (drinks) => drinks.name + "with imported beans"
);

console.log(drinksBeans2);
