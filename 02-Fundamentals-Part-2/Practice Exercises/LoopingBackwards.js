'use strict'
// 12. Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {

    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`${listOfNeighbours[i][j]} has neighbours: `);
        for (let k = 0; k < listOfNeighbours[i].length; k++) {
            if (k != j)
                console.log(`Neighbour: ${listOfNeighbours[i][k]}`);
        }

    }
}