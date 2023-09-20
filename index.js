////Is Truthy
//Create input value
//Check wether the value is true or false
console.log(undefined ? "True" : "False");

////Number Line
//Create input 2 variables
//add the 2 variables together then comapare it
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
