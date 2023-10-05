const coffeeMenu = require("./coffee_data");

////This workshop is worded wierdly and is somewhat unlcear on what they want me to do.
////It is unclear whether they want us to print the name property for each prompt or the entire object.
////I decided to print the name rather than the entire object.

////Prompt 2
//This will get all the "name" propertys from "coffeeMenu" and put it into the variable.
//I'm pretty sure this is what the 2nd promp wants from me, but im honostly not sure.
const drinks = coffeeMenu.map((drinks) => drinks.name);

console.log(drinks);

////Prompt 3
//This filters through "coffeeMenu" and puts only the drinks that cost 5 or less inside the variable.
const drinksFiveUnder = coffeeMenu.filter((drinks) => {
  return drinks.price <= 5;
});

console.log(drinksFiveUnder.map((drinks) => drinks.name));

////Prompt 4
//This filters through "coffeeMenu" and puts only the drinks that cost an even number inside the variable.
const drinksEven = coffeeMenu.filter((drinks) => drinks.price % 2 === 0);

console.log(drinksEven.map((drinks) => drinks.name));

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

console.log(drinksSeasonal.map((drinks) => drinks.name));

////Prompt 7
//This uses the previous varaible to get the names and edit them then print them out to thte console
drinksSeasonal.map((drinks) => {
  console.log(`${drinks.name} with imported beans`);
});

////Alternate Prompt 7
//This filters through "coffeeMenu" and gets the drinks that are seasonal and adds "with imported beans" in the name property.
//I'm honostly not sure if this is what it wants me to do.
// const drinksBeans = coffeeMenu.filter((drinks) => {
//   if (drinks.seasonal === true) {
//     return (drinks.name = `${drinks.name} with imported beans`);
//   }
// });
