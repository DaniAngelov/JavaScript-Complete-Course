/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he
 goes eating in a restaurant. In his country, it's usual to tip 15%
 if the bill value is between 50 and 300. If the value is different,
 the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable
called 'tip' for this. It's not allowed to use an if/else statement
 (If it's easier for you, you can start with an if/else statement,
  and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value,
the tip, and the final value (bill + tip). Example: “The bill was
 275, the tip was 41.25, and the total value 316.25”
Test data:
 Data 1: Test for bill values 275, 40 and 430
Hints:
 To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 Value X is between 50 and 300, if it's >= 50 && <= 300
*/

// 1.

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tipPercentage1 = ((bill1 >= 50 && bill1 <= 300) ? 15 : 20) / 100;
const tipPercentage2 = ((bill2 >= 50 && bill2 <= 300) ? 15 : 20) / 100;
const tipPercentage3 = ((bill3 >= 50 && bill3 <= 300) ? 15 : 20) / 100;
const tip1 = bill1 * tipPercentage1;
const tip2 = bill2 * tipPercentage2;
const tip3 = bill3 * tipPercentage3;

// 2.

console.log(`bill 1 : ${bill1} -> tip1 : ${tip1} --> final : ${bill1 + tip1}`);
console.log(`bill 2 : ${bill2} -> tip2 : ${tip2} --> final : ${bill2 + tip2}`);
console.log(`bill 3 : ${bill3} -> tip3 : ${tip3} --> final : ${bill3 + tip3}`);

