const experiencePoints = [100, 150, 75];
let sum = 0;

for (const subArray of experiencePoints) {
  sum += subArray;
}
console.log(sum);

const questTitles = ["Quest 1", "Quest 2", "Quest 3"];

for (const subArray of questTitles) {
  if (subArray === "Quest 2") {
    console.log(subArray);
  }
}

let questRewards = [50, 100, 75];
for (let i = 0; i < questRewards.length; i++) {
  questRewards[i] += 20;
}
console.log(questRewards);

questRewards = [50, 100, 75, 100];
const specificReward = 100;
let count = 0;

for (const subArray of questRewards) {
  if (subArray == 100) {
    count += 1;
  }
}
console.log(count);

let questChallenges = [120, 150, 75];

for (const subArray of questChallenges) {
  if (subArray >= 100) {
    console.log(true);
  } else {
    console.log(false);
  }
}

questChallenges = [50, 100, 75, 150];
let topNumber = 0;

for (const subArray of questChallenges) {
  if (subArray > topNumber) {
    topNumber = subArray;
  }
}

console.log(topNumber);

const enemyPowers = [50, 80, 65, 90];
const enemyHealths = [80, 120, 60, 100];
let totalPower = 0;
let totalHealths = 0;
for (const subArray of enemyPowers) {
  totalPower += subArray;
}
for (const subArray of enemyHealths) {
  totalHealths += subArray;
}

console.log(totalHealths + totalPower);

let questExperienceMatrix = [
  [100, 200],
  [150, 175],
  [120, 250],
];
let totalExperience = 0;

for (const subArray of questExperienceMatrix) {
  for (const expPoint of subArray) {
    totalExperience += expPoint;
  }
}

console.log(totalExperience);

// 10. Find the Quest with Highest Experience in Each Category
const questExperienceMatrix10 = [
  [100, 200],
  [150, 175],
  [120, 250],
];
let topValue = 0;

for (const subArray of questExperienceMatrix10) {
  for (const expPoint of subArray) {
    if (topValue < expPoint) {
      topValue = expPoint;
    }
  }
}
console.log(topValue);

// 11. Count High-Difficulty Quests in Each Category
const questDifficultyMatrix11 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

let topDifficult = 0;

for (const subArray of questDifficultyMatrix11) {
  for (const expPoint of subArray) {
    if (expPoint >= 7) {
      topDifficult += 1;
    }
  }
}
console.log(topDifficult);

// 12. Sum of Rewards for High-Reward Quests by Category
const questRewardsMatrix12 = [
  [50, 200],
  [300, 175],
  [120, 500],
];

let sumTop250 = 0;

for (const subArray of questRewardsMatrix12) {
  for (const expPoint of subArray) {
    if (expPoint >= 250) {
      sumTop250 += expPoint;
    }
  }
}
console.log(sumTop250);

// 13. Average Health of Enemies by Type
const enemyHealthMatrix = [
  [80, 120],
  [60, 90],
  [200, 150],
];
let typeOne = 0;
let typeTwo = 0;
let typeThree = 0;

for (let i = 0; i < enemyHealthMatrix.length; i++) {
  for (let h = 0; h < enemyHealthMatrix[i].length; h++) {
    // Accessing individual values and adding them to respective variables
    if (i === 0) {
      typeOne += enemyHealthMatrix[i][h];
    } else if (i === 1) {
      typeTwo += enemyHealthMatrix[i][h];
    } else if (i === 2) {
      typeThree += enemyHealthMatrix[i][h];
    }
  }
}

console.log("Type One Total Health:", typeOne);
console.log("Type Two Total Health:", typeTwo);
console.log("Type Three Total Health:", typeThree);
