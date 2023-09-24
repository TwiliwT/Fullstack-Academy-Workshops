//// Only Odds
// Create input "numbers" Array.
// Create placeholder "odds" array.
// Create a for loop to sift through every integer in the input array.
// Divise each number 2 if there is any remaining push that integer to the odds aray.
// Output "odds" array to the console

const numbers = [2, 4, 6, 8, 11, 20, 15, 22];
let odds = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds.push(numbers[i]);
  }
}

console.log(odds);

//// Vowel vs Consonant
// Create "vowels" array to comapre the word too.
// Create input "word".
// Create 2 counters, 1 for consonants, 1 for vowels.
// Compare each letter in the "word" string with the "vowels" array.
// For each vowel increase the vowel counter.
// For each consonants increase consonants counter.
// Then print the result to the console.

const vowels = ["a", "e", "i", "o", "u"];
const word = "hello";
let consonantsCounter = 0;
let vowelsCounter = 0;

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    vowelsCounter++;
  } else {
    consonantsCounter++;
  }
}

console.log(
  `${word} has ${consonantsCounter} consonants and ${vowelsCounter} vowels.`
);

//// Reverse Array
// Create input "toBeReversed" array.
// Create placeholder "reversed" output array.
// use a for loop to go through array and copy each number from the input array to the begining of the output causing the order to be reversed.

const toBeReversed = [1, 2, 3];
let reversed = [];

for (let i = 0; i < toBeReversed.length; i++) {
  reversed.unshift(toBeReversed[i]);
}

console.log(reversed);

//// FizzBuzz
// Create a for loop to divise each number
// if the number is divisible by 3 and 5 output "FizzBuzz"
// if the number is divisible by 5 output "Buzz"
// if the number is divisible by 3 output "Fizz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
