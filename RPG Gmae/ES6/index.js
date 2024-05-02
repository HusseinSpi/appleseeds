const players = [
  {
    name: "Hero",
    health: 100,
    level: 1,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
  {
    name: "Warrior",
    health: 120,
    level: 2,
    location: "mountain",
    inventory: ["axe", "shield"],
  },
  {
    name: "Mage",
    health: 80,
    level: 3,
    location: "castle",
    inventory: ["staff", "spell book"],
  },
  {
    name: "Ranger",
    health: 90,
    level: 2,
    location: "forest",
    inventory: ["bow", "arrows"],
  },
  {
    name: "Thief",
    health: 500,
    level: 1,
    location: "cave",
    inventory: ["dagger", "lockpick"],
  },
];

const names = players.map((player) => player.name);
console.log(names);

const levels = players
  .filter((player) => player.level !== 2)
  .map((player) => ({ level: player.level }));

console.log(levels);

const totalHealth = players.reduce((acc, cur) => {
  debugger;
  return acc + cur["health"];
}, 0);

console.log(totalHealth);

const playerNameAndLevel = players.map((player) => {
  return `${player.name} - level ${player.level}`;
});

console.log(playerNameAndLevel);

const newHealth = 150;
const playerName = "Hero";

players
  .filter((player) => playerName === player.name)
  .forEach((player) => (player.health = newHealth));

console.log(players);

const location = "forest";

const playersLo = players
  .filter((player) => player.location === location)
  .map((player) => {
    return player;
  });

console.log(playersLo);

const AveragePlayerLevel = Math.floor(
  players.reduce((acc, cur) => {
    return acc + cur.level;
  }, 0) / players.length
);

const AveragePlayerLevel1 =
  players.reduce((acc, cur) => {
    return acc + cur.level;
  }, 0) / players.length;

console.log(AveragePlayerLevel);
console.log(AveragePlayerLevel1);

const playersByHealth = players
  .map((player) => {
    return player;
  })
  .sort((a, b) => b.health - a.health);

console.log(playersByHealth);
console.log(players);

const playersInventories = players.map((player) => {
  return player.inventory;
});
console.log(playersInventories);
