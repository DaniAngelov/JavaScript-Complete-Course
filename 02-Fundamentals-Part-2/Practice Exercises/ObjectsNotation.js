'use strict'
// 8. Dot vs. Bracket Notation


const myCountry = {
    country: "Bulgaria",
    capital: "Sofia",
    language: "bulgarian",
    population: 7,
    neighbours: ["Greece", "Turkey", "Serbia"]
};

// 1.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

// 2.

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);