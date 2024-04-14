let isSunny = true;
let isWeekend = false;

console.log(`${isSunny} and ${isWeekend}`);

let age = 20;
let license = true;

if (age >= 18 && license) {
  console.log("pass");
}

let knowsPython = true;
let knowsJavaScript = false;

if (knowsJavaScript && knowsPython) {
  console.log("wow");
} else if (knowsJavaScript) {
  console.log("javascript");
} else if (knowsPython) {
  console.log("you're the beast");
} else {
  console.log("what are you doing here");
}

let isRaining = true;

if (!isRaining) {
  console.log("It's sunny today");
} else {
  console.log("is raining");
}

let likeMusic = false;
let playsGuitar = false;
let hasTime = false;

if (likeMusic && playsGuitar && hasTime) {
  console.log("Is your father a drug dealer or what?");
} else if (likeMusic && playsGuitar) {
  console.log("What do you associate with Justin Bieber?");
} else if (playsGuitar && hasTime) {
  console.log("How do you play music when you don't like it?");
} else if (hasTime && likeMusic) {
  console.log("okey");
} else if (hasTime) {
  console.log("has time");
} else if (likeMusic) {
  console.log("like music");
} else if (playsGuitar) {
  console.log("play guitar");
} else {
  console.log("go sleep");
}

let personAge = 25;

if (personAge >= 18) {
  console.log(true);
}

currentTemperature = 30;

if (currentTemperature <= 20 || currentTemperature >= 30) {
  console.log(`${currentTemperature}`);
}

let firstNumber = 10;
let secondNumber = "10";

if (firstNumber === secondNumber) {
  console.log(false);
} else if (firstNumber == secondNumber) {
  console.log(true);
}

let budget = 500;
let expense = 450;

if (budget > expense) {
  console.log("Money is enough");
} else {
  console.log("You must return some items");
}

let person1Height = 170;
let person2Height = 165;

if (person1Height > person2Height) {
  console.log("person1Height win");
} else if (person2Height > person1Height) {
  console.log("person2Height win");
} else {
  console.log(draw);
}
