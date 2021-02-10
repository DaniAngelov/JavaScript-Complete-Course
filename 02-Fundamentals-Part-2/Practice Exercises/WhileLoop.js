'use strict'
// 12. The while Loop


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [101, 24, 60, 14];
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);