let playerHealth = 55;
let playerIsStrong = null;

if (playerHealth < 50) {
  playerIsStrong = true;
} else {
  playerIsStrong = false;
}

let playerGold = 80;
let playerIsRich = null;

if (playerGold >= 1 && playerGold <= 100) {
  playerIsRich = true;
} else {
  playerIsRich = false;
}

let weather = "raining";
let timeOfDay = "night";
let continueAdventure = null;

if (weather == "raining" || timeOfDay == "night") {
  continueAdventure = false;
} else {
  continueAdventure = true;
}

let playerWeapon = "big sword";
let enemyWeapon = "big sword";

if (playerWeapon == enemyWeapon) {
  console.log("Weapons clashing");
} else {
  console.log("not");
}

let playerAge = 21;

if (playerAge <= 13 && playerAge >= 9) {
  console.log("you're a baby");
} else {
  console.log("you're a big man");
}

let playerLevel = 60;

if (playerLevel >= 50) {
  console.log("High score");
} else {
  console.log("Low score");
}

let numOfEnemies = 21;

numOfEnemies =
  numOfEnemies % 2 == 0 ? "Even number of enemies" : "Odd number of enemies";

console.log(numOfEnemies);

const playerAgeType =
  playerAge >= 20
    ? "Adult"
    : playerAge >= 19 && playerAge <= 13
    ? "Adolescent"
    : "youngling";

console.log(playerAgeType);

let battleSkill = 100;

battleSkill = battleSkill >= 70 ? "Skilled warrior" : "Train harder";

console.log(battleSkill);

let sessionDuration = 210;

if (sessionDuration >= 150) {
  console.log("Marathon");
} else if (sessionDuration >= 90 && sessionDuration < 150) {
  console.log("Moderate");
} else if (sessionDuration < 90) {
  console.log("Short");
}

let totalPotions = 270;
const usedPotions = 250;

if (totalPotions >= usedPotions) {
  console.log("Potions available");
} else {
  console.log("Out of potions");
}

const questAgeRestriction = 21;

if (playerAge >= 18 && playerAge >= questAgeRestriction) {
  console.log("pass");
} else {
  console.log("you're a baby");
}

let day = "monday";

if (day === "sunday") {
  console.log("Special event happening!");
} else if (day === "monday") {
  console.log("war3");
} else if (day === "sunday") {
  console.log("Marshmello party");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "saturday" || day === "friday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

const gameSettingYear = 1000;

if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
  console.log("Medieval are setting");
} else {
  console.log("Different historical are");
}

const characterClass = "Sura";
let characterLevel = 20;

if (characterLevel >= 10) {
  console.log(`Powerful ${characterClass}`);
} else {
  console.log(`weak ${characterClass}`);
}

let enemyCount = 3;

if (playerIsStrong && enemyCount < 6) {
  console.log("Ready for battle");
} else if (!playerIsStrong && enemyCount <= 3) {
  console.log("Proceed with caution");
} else {
  console.log("run!");
}

let questProgress = 100;
const questDifficulty = 3;

if (questProgress == 100) {
  console.log("Quest completed");
} else if (questProgress < 100 && questDifficulty > 3) {
  console.log("Quest progress");
} else if (questProgress < 100 && questDifficulty > 6) {
  console.log("Be careful");
}

const inventorySize = 80;

if (inventorySize >= 90) {
  console.log("Inventory almost full");
} else {
  console.log("Plenty of space in the inventory");
}
