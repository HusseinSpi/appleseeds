let characterStats = [];

function initializeCharacterStats() {
  characterStats = [];
}

function addCharacterStat(characterName, strength) {
  const stat = { name: characterName, strength: strength };
  characterStats.push(stat);
}

initializeCharacterStats();
addCharacterStat("Warrior", 90);
addCharacterStat("hussein", 90);
addCharacterStat("ahmad", 90);
addCharacterStat("yamen", 90);

function findCharacterStrength(name) {
  const character = characterStats.find(
    (characterStats) => characterStats.name === name
  );
  if (character) {
    console.log(`${name} strength: ${character.strength}`);
  } else {
    console.log("Character was not found");
  }
}

findCharacterStrength("hussein");

function updateCharacterStrength(name, newStrength) {
  const characterIndex = characterStats.findIndex(
    (characterStats) => characterStats.name === name
  );
  if (characterIndex !== -1) {
    characterStats[characterIndex].strength = newStrength;
    console.log(`Strength of ${name} updated to ${newStrength}.`);
  } else {
    console.log(`${name} is not in the list.`);
  }
}

updateCharacterStrength("hussein", 999);

function removeCharacterStat(name) {
  const characterIndex = characterStats.findIndex(
    (characterStats) => characterStats.name === name
  );
  if (characterIndex !== -1) {
    characterStats.splice(characterIndex, 1);
    console.log(`${name} has been removed from the character stats.`);
  } else {
    console.log("The character is not found.");
  }
}

console.log(characterStats);
removeCharacterStat("yamen");
console.log(characterStats);

function convertToFormattedString() {
  return characterStats
    .map((character) => `${character.name} - ${character.strength}`)
    .join(", ");
}

console.log(convertToFormattedString());

let characterHighestStrength = { name: "", strength: "" };

function strongestCharacter() {
  if (characterStats && characterStats.length > 0) {
    for (let i = 0; i < characterStats.length; i++) {
      if (characterHighestStrength.strength < characterStats[i].strength) {
        characterHighestStrength = {
          name: characterStats[i].name,
          strength: characterStats[i].strength,
        };
      }
    }
  } else {
    characterHighestStrength = "nothing";
  }
}

strongestCharacter();

console.log(characterHighestStrength);

// Pure Functions

function calculateAverageRating(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return (sum / input.length).toFixed(1);
}

let array = [8.5, 7.9, 6.3, 9.2, 8.1];

console.log(calculateAverageRating(array));

function extractDeveloperNames(input) {
  let developedBy = [];
  for (let i = 0; i < input.length; i++) {
    developedBy.push(input[i].split(" - Developed by ")[1]);
  }
  return developedBy;
}

array = [
  "The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo",
  "Final Fantasy VII (1997) - Developed by Square Enix",
  "Halo: Combat Evolved (2001) - Developed by Bungie",
];

console.log(extractDeveloperNames(array));

function containsWordInTitle(fullName, name) {
  debugger;
  let titleArray = fullName.split(" ");
  for (let i = 0; i < titleArray.length; i++) {
    if (name === titleArray[i]) {
      return true;
    }
  }
  return false;
}

console.log(containsWordInTitle("Final Fantasy VII", "Fantasy"));

function allTitlesStartWithSameLetter(input) {
  let firstLetter = input[0][0];
  for (let i = 0; i < input.length; i++) {
    if (firstLetter !== input[i][0]) {
      return false;
    }
  }
  return true;
}

array = ["Assassin's Creed", "Age of Empires", "Animal Crossing"];

console.log(allTitlesStartWithSameLetter(array));

function concatenateGenres(genres) {
  let result = "";
  for (let i = 0; i < genres.length; i++) {
    result += genres[i];
    if (i !== genres.length - 1) {
      result += ", ";
    }
  }
  return result;
}

const genres = ["RPG", "Action", "Adventure"];
const concatenatedGenres = concatenateGenres(genres);
console.log(concatenatedGenres);

function countInXPRange(xpArray, lowerBound, upperBound) {
  return xpArray.reduce((count, xp) => {
    if (xp >= lowerBound && xp <= upperBound) {
      return count + 1;
    }
    return count;
  }, 0);
}

const xpArray = [50, 75, 100, 30, 20, 100];
const lowerBound = 75;
const upperBound = 100;
console.log(countInXPRange(xpArray, lowerBound, upperBound));

function findGamesByDeveloper(gameList, developer) {
  let gameIndex = gameList[1].indexOf(developer);
  if (gameIndex !== -1) {
    return gameList[0][gameIndex];
  } else {
    return "No game found for this developer";
  }
}

let gameArr = [
  ["The Legend of Zelda", "Final Fantasy", "Halo: Combat Evolved"],
  ["Nintendo", "Square Enix", "Bungie"],
];
let gameName = "Nintendo";

console.log(findGamesByDeveloper(gameArr, gameName));

function capitalizeFirstLetter(input) {
  return input.map((title) => {
    const firstLetter = title[0].toUpperCase();
    const allTitle = title.slice(1);
    return firstLetter + allTitle;
  });
}

array = ["the legend of zelda", "final fantasy", "halo: combat evolved"];

console.log(capitalizeFirstLetter(array));

function uniqueXP(input) {
  let newArrayXp = [];
  for (let i = 0; i < input.length; i++) {
    if (newArrayXp.indexOf(input[i]) === -1) {
      newArrayXp.push(input[i]);
    }
  }
  return newArrayXp;
}

array = [100, 50, 75, 50, 100, 75, 100];

console.log(uniqueXP(array));

function sortTitlesAlphabetically(arr) {
  const newArr = arr.slice();
  return newArr.sort();
}

const gameTitles = [
  "The Legend of Zelda",
  "Final Fantasy",
  "Halo: Combat Evolved",
];
console.log(sortTitlesAlphabetically(gameTitles));
console.log(gameTitles);

function filterXPByCriteria(arr, greaterThan, lessThan) {
  let newArr = [];
  for (const item of arr) {
    if (item > greaterThan && item < lessThan) {
      newArr.push(item);
    }
  }
  return newArr;
}

arr = [10, 20, 30, 40, 50];
const greaterThan = 20;
const lessThan = 50;

console.log(filterXPByCriteria(arr, greaterThan, lessThan));

function sortXP(xpArray) {
  debugger;
  const sortedArray = [...xpArray];
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[i]) {
        let container = sortedArray[i];
        sortedArray[i] = sortedArray[j];
        sortedArray[j] = container;
      }
    }
  }

  return sortedArray;
}

arr = [100, 50, 75, 25, 10];

console.log(sortXP(arr));

function averageOfTopNXP(arr) {
  let one = -Infinity;
  let two = -Infinity;
  let three = -Infinity;
  for (const num of arr) {
    if (num > one) {
      three = two;
      two = one;
      one = num;
    } else if (num > two) {
      three = two;
      two = num;
    } else if (num > three) {
      three = num;
    }
  }
  const average = (one + two + three) / 3;
  return `${average} (The top 3 XP values are ${one}, ${two}, ${three})`;
}

arr = [50, 10, 100, 75, 25];
console.log(averageOfTopNXP(arr));
