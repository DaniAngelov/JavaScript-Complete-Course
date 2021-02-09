/* Coding Challenge #1

Mark and John are trying to compare their BMI(Body Mass Index),
    which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even
    implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information
about whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92
and is 1.95 m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85
kg and is 1.76m tall.
*/

// 1.

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


// 3.

const markHigherBMI1 = bmiMark1 > bmiJohn1;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("Is mark higher ? " + markHigherBMI1);
console.log("Is mark higher ? " + markHigherBMI2);
