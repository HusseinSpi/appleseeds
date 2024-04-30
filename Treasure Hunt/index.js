const map = document.getElementById("grid");

const styleElement = document.querySelector("style");
const styleContent = styleElement.textContent;
const repeatValue = styleContent.match(/repeat\((\d+),\s*(\d+px)\)/);
const repeatValue10 = repeatValue[1];

const gridMap = [];

const setGame = () => {
  for (let i = 0; i < repeatValue10; i++) {
    gridMap[i] = [];
    for (let j = 0; j < repeatValue10; j++) {
      gridMap[i][j] = "empty";
    }
  }
};

const checkDiv = (x, y, clas) => {
  if (gridMap[x] && gridMap[x][y] === "empty") {
    gridMap[x][y] = clas;
  } else {
    let newX = Math.floor(Math.random() * repeatValue10);
    let newY = Math.floor(Math.random() * repeatValue10);
    checkDiv(newX, newY, clas);
  }
};

const setTrapAndTreasure = () => {
  for (let i = 0; i < 8; i++) {
    let x = Math.floor(Math.random() * repeatValue10);
    let y = Math.floor(Math.random() * repeatValue10);
    checkDiv(x, y, "treasure");
  }
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * repeatValue10);
    let y = Math.floor(Math.random() * repeatValue10);
    checkDiv(x, y, "trap");
  }
};

const print = () => {
  for (let c = 0; c < gridMap.length; c++) {
    for (let r = 0; r < gridMap[0].length; r++) {
      const newDiv = document.createElement("div");
      newDiv.className = "cell";
      switch (true) {
        case gridMap[c][r] === "player":
          newDiv.className = "player";
          break;
        case gridMap[c][r] === "treasure":
          newDiv.className = "treasure";
          break;
        case gridMap[c][r] === "trap":
          newDiv.className = "trap";
          break;
        default:
          break;
      }
      map.appendChild(newDiv);
    }
  }
};

const lose = () => {
  while (map.firstChild) {
    map.removeChild(map.firstChild);
  }
  setGame();
  gridMap[0][0] = "player";
  playerX = 0;
  playerY = 0;
  setTrapAndTreasure();
  score.innerText = 0;
  moves.innerText = 20;
  print();
};

const movePlayer = (direction) => {
  let newX = playerX;
  let newY = playerY;

  const score = document.getElementById("score");
  let scoreNum = parseInt(score.textContent);

  const moves = document.getElementById("moves");
  let movesNum = parseInt(moves.textContent);

  switch (direction) {
    case "up":
      newX = playerX - 1;
      break;
    case "down":
      newX = playerX + 1;
      break;
    case "left":
      newY = playerY - 1;
      break;
    case "right":
      newY = playerY + 1;
      break;
  }
  if (newX >= 0 && newX < repeatValue10 && newY >= 0 && newY < repeatValue10) {
    if (movesNum === 0) {
      alert("Your steps are over");
      alert(`You lose, your score = ${scoreNum}`);
      lose();
      return;
    }

    if (gridMap[newX][newY] === "trap") {
      alert("Fell into a trap!");
      alert(`You lose, your score = ${scoreNum}`);
      lose();
      return;
    }

    if (gridMap[newX][newY] === "treasure") {
      alert("treasure found!");
      score.innerText = scoreNum + 1;
    }

    gridMap[playerX][playerY] = "empty";
    gridMap[newX][newY] = "player";
    playerX = newX;
    playerY = newY;
    moves.innerText = movesNum - 1;

    while (map.firstChild) {
      map.removeChild(map.firstChild);
    }
    print();
  }
};

setGame();
gridMap[0][0] = "player";
playerX = 0;
playerY = 0;
setTrapAndTreasure();
print();
