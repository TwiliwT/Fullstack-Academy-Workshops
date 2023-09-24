//// Only Odds
// Create input "numbers" Array
// Create placeholder "odds" array
// Create a for loop to sift through every integer in the input array
// Divise each number 2 if there is any remaining push that integer to the odds aray

const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds.push(numbers[i]);
  }
}

console.log(odds);
