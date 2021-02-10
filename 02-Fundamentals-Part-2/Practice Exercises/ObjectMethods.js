'use strict'
// 9. Object Methods


// 1.
const myCountry = {
    country: "Bulgaria",
    capital: "Sofia",
    language: "bulgarian",
    population: 7,
    neighbours: ["Greece", "Turkey", "Serbia"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
        and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.neighbours.length === 0 ? this.isIsland === true : this.isIsland === false;
    }
};

// 2.
myCountry.describe();

// 3.

myCountry.checkIsland();
console.log(myCountry);

