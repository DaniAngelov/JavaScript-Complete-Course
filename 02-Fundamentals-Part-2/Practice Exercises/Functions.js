'use strict'
// 1. Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}


const country1 = "Bulgaria";
const population1 = 7;
const capitalCity1 = "Sofia";
const country2 = "Spain";
const population2 = 46;
const capitalCity2 = "Madrid";
const country3 = "Germany";
const population3 = 83;
const capitalCity3 = "Berlin";
const countryStatistics1 = describeCountry(country1, population1, capitalCity1);
const countryStatistics2 = describeCountry(country2, population2, capitalCity2);
const countryStatistics3 = describeCountry(country3, population3, capitalCity3);
console.log(countryStatistics1);
console.log(countryStatistics2);
console.log(countryStatistics3);
