'use strict'
// 4. Functions Calling Other Functions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const perc = percentageOfWorld1(population);
    return `${country} has ${population} million people,   which is about ${perc}% of the world`
}

const population1 = 500;
const population2 = 225;
const population3 = 130;
const country1 = "Bulgaria";
const country2 = "Sweden";
const country3 = "China";

console.log(describePopulation(country1, population1));
console.log(describePopulation(country2, population2));
console.log(describePopulation(country3, population3));
