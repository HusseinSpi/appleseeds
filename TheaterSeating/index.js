// let stage = [
//   [1, 2, 3, 4, 5], // row
//   [1, 2, 3, 4, 5], // row
//   [1, 2, 3, 4, 5], // row
//   [1, 2, 3, 4, 5], // row
//   [1, 2, 3, 4, 5], // row
// ];

//                 columns
//              1  2  3  4  5
//              -------------
//         1 => 1, 2, 3, 4, 5
//         2 => 1, 2, 3, 4, 5
// rows:   3 => 1, 2, 3, 4, 5
//         4 => 1, 2, 3, 4, 5
//         5 => 1, 2, 3, 4, 5

// console.log(stage);

stage = [];

function initializeStage(rows, columns) {
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row.push(false);
    }
    stage.push(row);
  }
}

function printStage() {
  console.log("\t\t\t\tColumns:");
  process.stdout.write(`\t\t\t `);
  for (let c = 0; c < stage[0].length; c++) {
    process.stdout.write(`${c + 1} `);
  }
  console.log();

  for (let r = 0; r < stage.length; r++) {
    process.stdout.write(`Row ${r + 1}: `);
    for (let c = 0; c < stage[0].length; c++) {
      if (stage[r][c]) {
        process.stdout.write("X ");
      } else {
        process.stdout.write("O ");
      }
    }
    console.log();
  }
}

function bestSeatInRow(row) {
  const middleSeat = Math.floor(stage[row].length / 2);
  if (!stage[row][middleSeat] && canBookSeat(row, middleSeat)) {
    return middleSeat;
  }

  let leftSeat = middleSeat - 1;
  let rightSeat = middleSeat + 1;

  while (leftSeat >= 0 || rightSeat < stage[row].length) {
    if (!stage[row][leftSeat] && canBookSeat(row, leftSeat)) {
      return leftSeat;
    }
    if (!stage[row][rightSeat] && canBookSeat(row, rightSeat)) {
      return rightSeat;
    }

    leftSeat--;
    rightSeat++;
  }
  return -1;
}

function bestSeatInStage() {
  const bestOfEachRow = [];
  for (let r = 0; r < stage.length; r++) {
    bestOfEachRow.push(bestSeatInRow(r));
  }

  // console.log(bestOfEachRow);

  let middleIndex = Math.floor(stage[0].length / 2);

  bestIndex = -1;
  let seatNumber = -1;
  bestValue = Infinity;

  for (let r = 0; r < stage.length; r++) {
    let std = Math.abs(middleIndex - bestOfEachRow[r]);
    if (bestValue > std) {
      bestValue = std;
      bestIndex = r;
      seatNumber = bestOfEachRow[r];
    }
  }
  const bestSeat = [bestIndex, seatNumber];
  // console.log(bestSeat);
  return bestSeat;
}

function canBookSeat(row, column) {
  if (
    (stage[row][column - 2] && !stage[row][column - 1]) ||
    (stage[row][column + 2] && !stage[row][column + 1])
  ) {
    return false;
  }
  return true;
}

initializeStage(5, 5);

stage[0][0] = false;
stage[0][1] = true;
stage[0][2] = true;
stage[0][3] = true;
stage[0][4] = true;
stage[1][3] = true;
stage[1][2] = true;
stage[2][0] = true;
stage[2][1] = true;
stage[3][4] = true;
stage[4][2] = true;

//        Columns:
//        1 2 3 4 5
// Row 1: X X X X O
// Row 2: X X O O O
// Row 3: O O O O O
// Row 4: O O O O O
// Row 5: O O O O O

console.log();
printStage();

// console.log(canBookSeat(0, 2));
// console.log(bestSeatInRow(0));

let bestSeat = bestSeatInStage();
console.log();
console.log(
  `Best Seat in Stage in Row: ${bestSeat[0] + 1} Seat: ${bestSeat[1] + 1}`
);
