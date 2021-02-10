'use strict'
// 2. Function Declarations vs. Expressions

// 1.

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const population = 1441;

console.log(percentageOfWorld1(population));

// 3.

const population1 = 500;
const population2 = 225;
const population3 = 130;

console.log(percentageOfWorld1(population1));
console.log(percentageOfWorld1(population2));
console.log(percentageOfWorld1(population3));

// 4.

console.log(percentageOfWorld2(population1));
console.log(percentageOfWorld2(population2));
console.log(percentageOfWorld2(population3));