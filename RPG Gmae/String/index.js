let characterName = "iron  warrior";
let cCharacterName = characterName.split(" ");

for (let i = 0; i < cCharacterName.length; i++) {
  cCharacterName[i] =
    cCharacterName[i][0].toUpperCase() + cCharacterName[i].substring(1);
}

console.log(cCharacterName.join(" "));

function filterItems(inventory, query) {
  const filteredItems = [];

  for (const item of inventory) {
    if (item.includes(query)) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}

const inventory = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"];
const query = "Iron";
const filteredInventory = filterItems(inventory, query);
console.log(filteredInventory);

const npcName = "Goblin, Grunty";
const npcNameList = npcName.split(", ");
console.log(npcNameList.reverse().join(" "));

function extractDuration(durationString) {
  debugger;
  const parts = durationString.split(" ");
  const hours = parseInt(parts[0]);
  const minutes = parseInt(parts[1]);
  console.log(`${hours} hours and ${minutes} minutes`);
}

let input = "3h 45min";
extractDuration(input);

function gameTitle(name) {
  const nameArray = name.split(" ");
  let lastName = [];
  for (const item of nameArray) {
    lastName.push(item[0]);
  }
  return lastName.join("");
}

input = "Epic Fantasy Battle";
console.log(gameTitle(input));

function className(input) {
  let inputArray = input.split(";");
  console.log(
    `${inputArray[0]}, class: ${inputArray[1]}, level: ${inputArray[2]}`
  );
}

input = "Iron Warrior;Warrior;10";
className(input);

function lowerName(input) {
  let inputArray = input.split(" ");
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i][0].toLowerCase() + inputArray[i].substring(1);
  }

  console.log(inputArray.join("-"));
}

input = "Dark Forest";
lowerName(input);

function textLower50(text, max_letter) {
  if (text.length <= max_letter) {
    return text;
  } else {
    let newText = text.substring(0, max_letter + 1) + "...";
    return newText;
  }
}

input =
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";

console.log(input.length);
console.log(textLower50(input, 50));

function monsterName(input) {
  monsterNameArray = input.split(", ");
  console.log(monsterNameArray);
}

input = "Goblin, Orc, Dragon";
monsterName(input);
