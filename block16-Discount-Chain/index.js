const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
//At the end of the script, print the total amount in the console.

//Put the name of the object you wish to get the total of in this variable.
const inputName = timmy;

const startingPrice = inputName.pricePerRefill * inputName.refills;
const subscription = inputName.subscription;
const coupon = inputName.coupon;

//This function applys the subscription discount if the condition is true.
function firstDiscount(startingPrice, subscription) {
  if (subscription == true) {
    return startingPrice - startingPrice * 0.25;
  } else {
    return startingPrice;
  }
}

//This calls the first function.
const priceAfterSubscription = firstDiscount(startingPrice, subscription);

//This function applys the coupon discount if the condition is true.
function secondDiscount(priceAfterSubscription, coupon) {
  if (coupon == true) {
    return priceAfterSubscription - 10;
  } else {
    return priceAfterSubscription;
  }
}

//This calls the second function.
const totalPrice = secondDiscount(priceAfterSubscription, coupon);

console.log(`Your grand total is $${totalPrice}`);
