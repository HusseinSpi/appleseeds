let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    makeSound(drumButtons[i].innerHTML);
    buttonAnimation(drumButtons[i].innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();

    case "s":
      let tom3 = new Audio("./sounds/tom3.mp3");
      tom3.play();

    case "d":
      let tom4 = new Audio("./sounds/tom4.mp3");
      tom4.play();

    case "j":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();

    case "k":
      let kick = new Audio("./sounds/kick.mp3");
      kick.play();

    case "l":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

// const map = document.getElementById("grid");

// const styleElement = document.querySelector("style");
// const styleContent = styleElement.textContent;
// const repeatValue = styleContent.match(/repeat\((\d+),\s*(\d+px)\)/);
// const repeatValue10 = repeatValue[1];

// const gridMap = [];

// const setGame = () => {
//   for (let i = 0; i < repeatValue10; i++) {
//     gridMap[i] = [];
//     for (let j = 0; j < repeatValue10; j++) {
//       gridMap[i][j] = "empty";
//     }
//   }
// };

// const checkDiv = (x, y, clas) => {
//   if (gridMap[x] && gridMap[x][y] === "empty") {
//     gridMap[x][y] = clas;
//   } else {
//     let newX = Math.floor(Math.random() * repeatValue10);
//     let newY = Math.floor(Math.random() * repeatValue10);
//     checkDiv(newX, newY, clas);
//   }
// };

// const setTrapAndTreasure = () => {
//   for (let i = 0; i < 8; i++) {
//     let x = Math.floor(Math.random() * repeatValue10);
//     let y = Math.floor(Math.random() * repeatValue10);
//     checkDiv(x, y, "treasure");
//   }
//   for (let i = 0; i < 5; i++) {
//     let x = Math.floor(Math.random() * repeatValue10);
//     let y = Math.floor(Math.random() * repeatValue10);
//     checkDiv(x, y, "trap");
//   }
// };

// const print = () => {
//   for (let c = 0; c < gridMap.length; c++) {
//     for (let r = 0; r < gridMap[0].length; r++) {
//       const newDiv = document.createElement("div");
//       newDiv.className = "cell";
//       switch (true) {
//         case gridMap[c][r] === "player":
//           newDiv.className = "player";
//           break;
//         case gridMap[c][r] === "treasure":
//           newDiv.className = "treasure";
//           break;
//         case gridMap[c][r] === "trap":
//           newDiv.className = "trap";
//           break;
//         default:
//           break;
//       }
//       map.appendChild(newDiv);
//     }
//   }
// };

// const movePlayer = (direction) => {
//   let newX = playerX;
//   let newY = playerX;

//   switch (direction) {
//     case "up":
//       newX = playerX - 1;
//       break;
//     case "down":
//       newX = playerX + 1;
//       break;
//     case "left":
//       newY = playerY - 1;
//       break;
//     case "right":
//       newY = playerY + 1;
//       break;
//   }
//   if (newX >= 0 && newX < repeatValue10 && newY >= 0 && newY < repeatValue10) {
//     gridMap[playerX][playerY] = "empty";
//     gridMap[newX][newY] = "player";
//     playerX = newX;
//     playerY = newY;
//   }
//   print();
// };

// setGame();
// gridMap[0][0] = "player";
// playerX = 0;
// playerY = 0;
// setTrapAndTreasure();
// print();
// console.log(gridMap);
