// 1. Move Player
let gameWorld1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const playerPosition1 = { x: 1, y: 1 };
const direction1 = "east";

function movePlayer(grid, player, direction) {
  switch (direction) {
    case "north":
      (player.y = player.y - 1), 0;
      break;
    case "south":
      (player.y = player.y + 1), 0;
      break;
    case "west":
      (player.x = player.x - 1), 0;
      break;
    case "east":
      (player.x = player.x + 1), 0;
      break;
    default:
      break;
  }
  grid[player.y][player.x] = "x";
  return grid;
}

console.log(movePlayer(gameWorld1, playerPosition1, direction1));

// 2. Battle Simulation
let playerHP2 = 100;
const playerAttack2 = 20;
let enemyHP2 = 50;
const enemyAttack2 = 15;

function fight(playerPower, enemyPower, playerHealth, enemyHealth) {
  while (true) {
    enemyHealth -= playerPower;
    playerHealth -= enemyPower;
    if (enemyHealth <= 0) {
      console.log("Player wins");
      break;
    } else if (playerHealth <= 0) {
      console.log("Enemy wins");
      break;
    }
  }
}

fight(playerAttack2, enemyAttack2, playerHP2, enemyHP2);

// 3. Find Enemies
const gameWorld3 = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];

function findEnemies(gameWorld) {
  const enemies = [];

  for (let y = 0; y < gameWorld.length; y++) {
    for (let x = 0; x < gameWorld[y].length; x++) {
      if (gameWorld[y][x] === 2) {
        enemies.push({ x, y });
      }
    }
  }
  return enemies;
}

console.log(findEnemies(gameWorld3));

// 4. Find Path to Goal
const playerPosition4 = { x: 1, y: 1 };
const goalPosition4 = { x: 0, y: 2 };

function move2(player, goal) {
  const yGoal = Math.abs(goal.y - player.y);
  const xGoal = Math.abs(goal.x - player.x);
  const outPut = [];
  for (i = 0; i < xGoal; i++) {
    if (goal.x > player.x) {
      outPut.push("east");
    } else {
      outPut.push("west");
    }
  }
  for (i = 0; i < yGoal; i++) {
    if (goal.y > player.y) {
      outPut.push("south");
    } else {
      outPut.push("north");
    }
  }
  return outPut;
}

console.log(move2(playerPosition4, goalPosition4));
