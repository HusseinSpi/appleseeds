let numbersArray: number[] = [1, 2, 3, 4, 5];

function sumArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

let myTuple: [string, number[]] = ["Numbers", [1, 2, 3, 4, 5]];

function logTuple(tuple: [string, number[]]): void {
  console.log(`String part: ${tuple[0]}`);
  console.log(`Array part: ${tuple[1].join(", ")}`);
}

console.log(`Sum of array: ${sumArray(numbersArray)}`);

logTuple(myTuple);
