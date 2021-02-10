'use strict'

// 6. Basic Array Operations (Methods)

// 1.
const country = "Bulgaria";
const neighbour1 = "Turkey";
const neighbour2 = "Greece";
const neighbour3 = "Serbia";
const neighbours = [neighbour1, neighbour2, neighbour3];

console.log(neighbours);
// 2.

neighbours.push("Utopia");
console.log(neighbours);

// 3.
neighbours.pop("Utopia");
console.log(neighbours);

// 4.

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

// 5.

neighbours[neighbours.indexOf("Greece")] = "Republic of Sweden";

console.log(neighbours);