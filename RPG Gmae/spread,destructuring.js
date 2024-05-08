// 1
const heroData = {
  heroName: "Aragorn",
  heroLevel: 20,
  heroClass: "Ranger",
  race: "Human",
};
const { heroName, heroLevel, heroClass } = heroData;

console.log(heroName);
console.log(heroLevel);
console.log(heroClass);

// 2
let topHeroes = ["Gandalf", "Legolas", "Frodo", "Samwise"];

[topHeroes[0], topHeroes[1]] = [topHeroes[1], topHeroes[0]];

console.log(topHeroes);

// 3

const heroLevels = {
  Aragorn: 20,
  Legolas: 19,
};

const updates = {
  Aragorn: 21,
  Legolas: 20,
};

function updateHeroLevels(heroLevels, updates) {
  return { ...heroLevels, ...updates };
}

const updatedHeroLevels = updateHeroLevels(heroLevels, updates);
console.log(updatedHeroLevels);

// 4
const quests1 = ["Find the ring", "Save the king", "Protect the realm"];
const quests2 = ["Destroy the ring", "Find the lost city", "Save the king"];

const combinedQuests = [...new Set([...quests1, ...quests2])];
console.log(combinedQuests);

// 5
const heroInfo = {
  name: "Legolas",
  equipment: {
    first: "Bow of the Galadhrim",
    second: "Elven dagger",
    third: "Cloak of Lothlorien",
  },
};

const {
  equipment: { first, second, third },
} = heroInfo;
console.log(first);
console.log(second);

// 6
const baseInfo = {
  name: "Gandalf",
  class: "Wizard",
};

const additionalStats = {
  level: 25,
  power: 100,
};

const mergedHero = { ...baseInfo, ...additionalStats };
console.log(mergedHero);

// 7
const heroDetails = {
  name: "Legolas",
  level: 20,
  skills: ["Archery", "Sneaking", "Hand-to-hand combat"],
};

function addSkills(heroDetails, ...newSkills) {
  const existingSkills = new Set(heroDetails.skills);
  const uniqueSkills = [...existingSkills, ...new Set(newSkills)];
  return { ...heroDetails, skills: uniqueSkills };
}

const updatedHeroDetails = addSkills(
  heroDetails,
  "Swordsmanship",
  "Tracking",
  "Swordsmanship"
);
console.log(updatedHeroDetails);

// 8
const flattenQuestLog = (questLog) => {
  const flattenedQuests = questLog.reduce(
    (allQuests, monthlyQuests) => [...allQuests, ...monthlyQuests],
    []
  );
  return [...new Set(flattenedQuests)];
};

const questLog = [
  ["Defeat the dragon", "Rescue the princess"],
  ["Rescue the princess", "Explore the ancient ruins"],
  ["Explore the ancient ruins", "Discover the hidden treasure"],
];

const flattenedQuestsWithoutDuplicates = flattenQuestLog(questLog);
console.log(flattenedQuestsWithoutDuplicates);

// 9
const adventurers = [
  { name: "Bilbo", favorites: ["Find the ring", "Join the dwarves"] },
  { name: "Frodo", favorites: ["Destroy the ring", "Visit Rivendell"] },
  { name: "Aragorn", favorites: ["Protect the hobbits", "Serve the king"] },
];

const extractFavoriteQuests = (adventurers) => {
  return adventurers.map(({ name, favorites }) => ({
    name,
    favoriteQuest: favorites[0],
  }));
};

const favoriteQuests = extractFavoriteQuests(adventurers);
console.log(favoriteQuests);

// 10
const quests = [
  { name: "Defeat the dragon", difficulty: 8 },
  { name: "Rescue the princess", difficulty: 5 },
];

const updateQuestDifficulty = (quests, questName, difficultyIncrease) => {
  return quests.map(({ name, difficulty }) => ({
    name,
    difficulty:
      name === questName ? difficulty + difficultyIncrease : difficulty,
  }));
};

const updatedQuests = updateQuestDifficulty(quests, "Defeat the dragon", 3);
console.log(updatedQuests);
