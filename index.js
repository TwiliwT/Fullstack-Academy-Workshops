////Is Truthy
//Create input value
//check wether the value is true or false
//determine what the type of input it is
let ifTruthy = undefined;
let ifTruthyType = typeof ifTruthy;

if (ifTruthy) {
  console.log(true);
} else if (ifTruthyType === "boolean") {
  console.log("The boolean value false is falsy");
} else if (ifTruthyType === "object") {
  console.log("The null value is falsy");
} else if (ifTruthyType === "undefined") {
  console.log("undefined is falsy");
} else if (ifTruthyType === "number") {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (ifTruthyType === "string") {
  console.log("The empty string is falsy (the only falsy string)");
}

////Number Line
//Create 2 input variables
//take the sum of the 2 variables then compare it
//check if the sum is less tahn -1000
//Check if the sum is less than 0
//check if the sum is equal to 0
//check if the sum is greater than 0
//check if the sum is greater than 100
let value1 = 50;
let value2 = 51;
let sum = value1 + value2;

if (sum < -1000) {
  console.log(`${sum} less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if (sum === 0) {
  console.log(`${sum} is equal to 0`);
} else if (sum > 0 && sum <= 100) {
  console.log(`${sum} is greater than 0`);
} else {
  console.log(`${sum} is greater than 100`);
}

////Greater Than Or Equal To 5
//Create 2 input variables
//check to see if BOTH variable are greater than 5 and then print true or false
let input1 = 5;
let input2 = 5;

console.log(input1 >= 5 && input2 >= 5 ? true : false);

////Pair and Compare
//Create 2 sets of 2 variables
//comapare each set and print true if either of them is truthy

let param1A = "cake";
let param1B = "cake";

let param2A = "pie";
let param2B = "pie";

console.log(param1A === param1B || param2A === param2B ? true : false);
