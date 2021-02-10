'use strict'
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
 Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
 To calculate average of 3 values, add them all together and divide by 3
 To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

*/

// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 3.
function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins > avgKoalas && avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgDolhins < avgKoalas && avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
    }
}

let dolphinesScores1 = 120;
let dolphinesScores2 = 112;
let dolphinesScores3 = 81;
let koalasScores1 = 109;
let koalasScores2 = 90;
let koalasScores3 = 106;

let averageDolphines = calcAverage(dolphinesScores1, dolphinesScores2, dolphinesScores3);
let averageKoalas = calcAverage(koalasScores1, koalasScores2, koalasScores3);

console.log(averageDolphines);
console.log(averageKoalas);

checkWinner(averageDolphines, averageKoalas);

// 5.

dolphinesScores1 = 44;
dolphinesScores2 = 23;
dolphinesScores3 = 71;
koalasScores1 = 65;
koalasScores2 = 54;
koalasScores3 = 49;

averageDolphines = calcAverage(dolphinesScores1, dolphinesScores2, dolphinesScores3);
averageKoalas = calcAverage(koalasScores1, koalasScores2, koalasScores3);

console.log("DATA 1 --> ");
console.log(averageDolphines);
console.log(averageKoalas);

checkWinner(averageDolphines, averageKoalas);

dolphinesScores1 = 85;
dolphinesScores2 = 54;
dolphinesScores3 = 41;
koalasScores1 = 23;
koalasScores2 = 34;
koalasScores3 = 27;

averageDolphines = calcAverage(dolphinesScores1, dolphinesScores2, dolphinesScores3);
averageKoalas = calcAverage(koalasScores1, koalasScores2, koalasScores3);

console.log("DATA 2 --> ");
console.log(averageDolphines);
console.log(averageKoalas);

checkWinner(averageDolphines, averageKoalas);