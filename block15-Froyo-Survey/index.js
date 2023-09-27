const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

console.log(customer);

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

console.log(customer);

delete customer.zipCode;
delete customer.favoriteStore;

console.log(customer);

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.log(customer);

console.log(Object.keys(customer));
