const weaponInventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";

weaponInventory.includes(weaponToCheck)
  ? console.log("the weapon is exists")
  : console.log("the weapon is not exists");

const questNames = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const reversQuestNames = questNames.reverse();

console.log(reversQuestNames);

const monsterTypes = ["Dragon", "Goblin", "Orc"];
const monsterTypesString = monsterTypes.join(" - ");

console.log(monsterTypesString);

const monsterToCheck = "Orc";

monsterTypes.includes(monsterToCheck)
  ? console.log("the monster is exists")
  : console.log("the monster is not exists");

questNames.reverse();
const specificQuest = "Rescue the Princess";

questNames.includes(specificQuest)
  ? console.log(
      `${specificQuest} found at index ${questNames.indexOf(specificQuest)}`
    )
  : console.log("Quest not found");

const monsterList = ["Dragon", "Orc", "Goblin"];
monsterList.shift();
console.log(monsterList);

const newMonster = "Dragon";
monsterList.unshift(newMonster);
console.log(monsterList);

const monsterRemove = monsterList.shift(0, 1);
console.log(monsterList);
console.log(monsterRemove);

const heroList1 = ["Archer", "Mage"];
const heroList2 = ["Warrior", "Healer"];
const heroList = [...heroList1, ...heroList2];
console.log(heroList);

questNames.sort();
console.log(questNames);

const spellString = "Fireball,Heal,Ice Lance";
const spellStringArray = spellString.split(",");
console.log(spellStringArray);

const n = 2;
const firstNQuests = questNames.slice(0, n);
console.log(firstNQuests);

monsterList.length = 0;
console.log(monsterList);

let inventory = ["Sword", "Shield"];
const newWeapon = "Bow";

inventory.push(newWeapon);
console.log(inventory);

inventory = ["Gold", "Magic", "Potion", "Shield"];
const itemSold = inventory.pop();

console.log(`the ${itemSold}, that was sold`);

const quests = ["Rescue the Princess", "Dragon's Lair"];
const newQuest = "Defeat the Goblin King";

quests.unshift(newQuest);

console.log(quests);

quests.sort();
console.log(quests);

const questToCheck = "Rescue the Princess";

quests.includes(questToCheck)
  ? console.log("the quest is exists")
  : console.log("the quest is not exists");

scores = [30, 80, 60, 90];
scores.sort();
scores.reverse();
console.log(scores);
