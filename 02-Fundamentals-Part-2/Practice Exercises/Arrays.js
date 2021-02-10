'use strict'
// 5.Introduction to Arrays

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [101, 24, 60, 14];
console.log(populations);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);