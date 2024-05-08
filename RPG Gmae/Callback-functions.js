const processEnemies = (arrayOfEnemies, callbackFunction) => {
  if (!Array.isArray(arrayOfEnemies)) {
    console.log("Expected an array of enemies");
  }

  for (let i = 0; i < arrayOfEnemies.length; i++) {
    const enemy = arrayOfEnemies[i];

    if (!enemy.hasOwnProperty("name") || !enemy.hasOwnProperty("health")) {
      console.log(`Enemy with ID ${enemy.id} is not in the right structure.`);
      return;
    }
  }

  const newEnemies = JSON.parse(JSON.stringify(arrayOfEnemies));

  newEnemies.forEach(callbackFunction);

  return newEnemies;
};

const callbackFunction = (enemy) => {
  console.log(`Processing enemy ${enemy.name} with health ${enemy.health}`);
  enemy.health -= 5;
};

const enemies = [
  { id: 1, name: "Enemy 1", health: 100 },
  { id: 2, name: "Enemy 2", health: 150 },
  { id: 3, name: "Enemy 3", health: 80 },
];

console.log(processEnemies(enemies, callbackFunction));

const processQuests = (arrayOfQuest, callbackFunction) => {
  if (!Array.isArray(arrayOfQuest)) {
    console.log("Expected an array of Quest");
  }

  for (let i = 0; i < arrayOfQuest.length; i++) {
    const quest = arrayOfQuest[i];

    if (!quest.hasOwnProperty("name") || !quest.hasOwnProperty("experience")) {
      console.log(`Quest with ID ${quest.id} is not in the right structure.`);
      return;
    }
  }

  const newQuests = JSON.parse(JSON.stringify(arrayOfQuest));

  newQuests.forEach(callbackFunction);

  return newQuests;
};

const callbackFunctionQ = (quest) => {
  console.log(
    `Processing quest ${quest.name} with experience ${quest.experience}`
  );
  quest.experience += 50;
};

const quests = [
  { id: 1, name: "Quest 1", experience: 100 },
  { id: 2, name: "Quest 2", experience: 150 },
  { id: 3, name: "Quest 3", experience: 80 },
];

console.log(processQuests(quests, callbackFunctionQ));

//  ------------------------------------------------------

const processPlayers = (arrayOfPlayer, callbackFunction) => {
  if (!Array.isArray(arrayOfPlayer)) {
    console.log("Expected an array of Quest");
  }

  for (let i = 0; i < arrayOfPlayer.length; i++) {
    const player = arrayOfPlayer[i];

    if (
      !player.hasOwnProperty("name") ||
      !(typeof player.name === "string") ||
      !player.hasOwnProperty("health") ||
      !(typeof player.health === "number") ||
      !player.hasOwnProperty("level") ||
      !(typeof player.level === "number") ||
      !player.hasOwnProperty("location") ||
      !(typeof player.location === "string") ||
      !player.hasOwnProperty("inventory") ||
      !Array.isArray(player.inventory)
    ) {
      console.log(`Player with ID ${player.id} is not in the right structure.`);
      return;
    }
  }

  const newPlayers = JSON.parse(JSON.stringify(arrayOfPlayer));

  newPlayers.forEach(callbackFunction);

  return newPlayers;
};

const callbackFunctionP = (player) => {
  player.health += 24;
  console.log(
    `Processing enemy ${player.name} with health ${player.health} with level ${player.level} with location ${player.location} with inventory ${player.inventory}`
  );
};

const player = [
  {
    id: "45e3e",
    name: "Hussein",
    health: 100,
    level: 999,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
  {
    id: "45e4e",
    name: "ahmad",
    health: 100,
    level: 10,
    location: "desert",
    inventory: ["boy", "health potion"],
  },
  {
    id: "45e5e",
    name: "mustafa",
    health: 100,
    level: 1,
    location: "sea",
    inventory: ["shield", "health potion"],
  },
  {
    id: "45e6e",
    name: "loay",
    health: 100,
    level: 92,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
];

console.log(processPlayers(player, callbackFunctionP));
