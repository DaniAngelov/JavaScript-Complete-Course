//6. Taking Decisions: if / else Statements

let populationBulgaria = 130000000;
const averagePopulation = 33000000;
const averageBelow = averagePopulation - populationBulgaria;

if (populationBulgaria > averagePopulation) {
    console.log("Bulgaria's population is above average");
} else {
    console.log(`Bulgaria's population is ${averageBelow}  below average`)
}