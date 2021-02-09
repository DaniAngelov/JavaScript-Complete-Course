/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already
 wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.
 The message is either "Mark's BMI is higher than John's!" or "John's
  BMI is higher than Mark's!" 2. Use a template literal to include
  the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher
   than John's (23.9)!"
Hint: Use an if/else statement
*/

// first
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

// second
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// 2.
const bmiMark1 = markWeight1 / markHeight1 ** 2;
const bmiJohn1 = johnWeight1 / johnHeight1 ** 2;
const bmiMark2 = markWeight2 / markHeight2 ** 2;
const bmiJohn2 = johnWeight2 / johnHeight2 ** 2;


console.log("Mark bmi test data 1: " + bmiMark1);
console.log("Mark bmi test data 2: " + bmiMark2);
console.log("John bmi test data 1: " + bmiJohn1);
console.log("John bmi test data 2: " + bmiJohn2);

// test data 1
if (bmiMark1 > bmiJohn1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// test data 2

if (bmiMark2 > bmiJohn2) {
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})!`);
} else {
    console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`);
}