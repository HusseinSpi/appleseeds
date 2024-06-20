"use strict";
let numbersArray = [1, 2, 3, 4, 5];
function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
let myTuple = ["Numbers", [1, 2, 3, 4, 5]];
function logTuple(tuple) {
    console.log(`String part: ${tuple[0]}`);
    console.log(`Array part: ${tuple[1].join(", ")}`);
}
console.log(`Sum of array: ${sumArray(numbersArray)}`);
logTuple(myTuple);
