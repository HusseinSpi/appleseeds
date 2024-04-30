// const character = {
//   name: "hussein",
//   class: "wizard",
//   level: 999,
//   abilities: ["Fireball", "Curse of poison", "Invisibility"],
//   stats: {
//     strength: 70,
//     intelligence: 100,
//     dexterity: 87,
//     getOverallStrength: function () {
//       return this.strength + this.intelligence + this.dexterity;
//     },
//   },
// };

// console.log(character.stats.getOverallStrength());

// character.equipment = {
//   weapon: "magical stick",
//   armor: "Magician's armor",
//   accessories: ["Shield", "Helmet"],
// };

// console.log(character);

// console.log(character.abilities);
// console.log(character["abilities"]);

// console.log(character.equipment.armor);
// console.log(character["equipment"]["armor"]);

// character.level = 1000;
// character.abilities.push("Electricity ball");
// delete character.class;
// character["equipment"]["weapon"] = "sword";
// character["equipment"]["weapon"] = "magical stick";

// for (const key in character) {
//   if (character.hasOwnProperty("stats")) {
//     console.log("yes");
//     return;
//   } else {
//     console.log("no");
//     return;
//   }
// }

const characters = [
  { name: "Endrin", attributes: { health: 100, mana: 50 }, class: "wizard" },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];

console.log(characters[0].attributes.health);

const charactersMar = { ...characters[0], ...characters[1] };

console.log(charactersMar);

Object.freeze(characters[0]);
characters[0].name = "ahmad";
characters[0].age = 33;
console.log(characters[0]);
Object.seal(characters[1]);
characters[1].name = "ahmad";
characters[1].age = 33;
console.log(characters[1]);

const characterStats = {
  name: "hussein",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};

for (const key of Object.keys(characterStats)) {
  console.log(`${key} : ${characterStats[key]}`);
}

const gameScores = {
  Endrin: 950,
  Mira: 1200,
  Thorn: 800,
};

gameScoresArr = Object.entries(gameScores);

console.log(gameScoresArr);

for (const item of gameScoresArr) {
  if (item[1] < 1000) {
    item[1] += 100;
  }
}

console.log(gameScoresArr);

const quests = {
  1: {
    name: "Find the Lost Sword",
    Difficulty: "Easy",
    reward: "100 gold",
  },
  2: {
    name: "Defeat the Dragon",
    Difficulty: "hard",
    reward: "500 gold",
  },
  3: {
    name: "Escort the Merchant",
    Difficulty: "medium",
    reward: "250 gold",
  },
};

console.log(quests);

for (const key in quests) {
  if (quests[key].Difficulty === "hard") {
    quests[key].isHard = true;
  }
}

console.log(quests);

const skillLevels = {
  Ranger: [8, 9, 7, 10, 8.5],
  Mage: [8.5, 8, 9, 9.5, 7.5],
  Warrior: [7, 7.5, 8, 8.5, 9],
};

for (const key of Object.keys(skillLevels)) {
  debugger;
  let sum = 0;
  for (let i = 0; i < skillLevels[key].length; i++) {
    sum += skillLevels[key][i];
  }
  const average = sum / skillLevels[key].length;
  console.log(`Class Name: ${key}, average skill level: ${average}`);
}

debugger;

const questRewards = {
  "Find the Lost Sword": "Legendary Weapon",
  "Defeat the Dragon": "Epic Armor",
  "Escort the Merchant": "Gold",
  "Discover the Ancient Ruins": "Legendary Weapon",
};

const restructured = {};

for (const [quest, reward] of Object.entries(questRewards)) {
  if (!restructured[reward]) {
    restructured[reward] = [];
  }
  restructured[reward].push(quest);
}

console.log(restructured);

console.log(Object.entries(questRewards));
