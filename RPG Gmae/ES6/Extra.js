const characters = [
  { name: "John", level: 2, skills: ["fire", "ice"] },
  { name: "Jane", level: 5, skills: ["fire", "ice", "wind"] },
  { name: "Doe", level: 2, skills: ["earth"] },
];

const groupCharactersByLevel = () => {
  const groupedCharacters = [];

  characters.forEach((player) => {
    let level = player.level;
    if (!groupedCharacters[level]) {
      groupedCharacters[level] = [];
    }
    groupedCharacters[level].push(player);
  });

  return groupedCharacters;
};

console.log(groupCharactersByLevel());

const findHighestLevelCharacter = () => {
  highLevel = null;
  characters.forEach((player) => {
    if (highLevel === null || player.level > highLevel.level) {
      highLevel = player;
    }
  });
  return highLevel;
};

console.log(findHighestLevelCharacter());

const calculateAverageCharacterLevel = () => {
  const average = Math.floor(
    characters.reduce((acc, cur) => {
      return acc + cur.level;
    }, 0) / characters.length
  );
  return average;
};

console.log(calculateAverageCharacterLevel());

const filterCharactersByLevelRange = (lower, upper) => {
  const filter = characters.filter((player) => {
    if (player.level >= lower && player.level <= upper) {
      return player;
    }
  });
  return filter;
};

console.log(filterCharactersByLevelRange(1, 3));

const countCharactersPerLevel = () => {
  const count = characters.reduce((opj, characters) => {
    if (!opj[characters.level]) {
      opj[characters.level] = 1;
    } else {
      opj[characters.level]++;
    }
    return opj;
  }, {});
  return count;
};

console.log(countCharactersPerLevel());

const findCharacterWithMostSkills = () => {
  highSkill = null;
  characters.filter((player) => {
    if (highSkill === null || player.skills.length > highSkill.skills.length) {
      highSkill = player;
    }
  });
  return highSkill;
};

console.log(findCharacterWithMostSkills());

const countTotalNumberOfSkills = () => {
  const count = characters.reduce((acc, cur) => {
    return acc + cur.skills.length;
  }, 0);
  return count;
};

console.log(countTotalNumberOfSkills());

const findUniqueSkills = () => {
  let allSkills = [];
  characters.forEach((player) => {
    player.skills.forEach((skill) => {
      if (!allSkills.includes(skill)) {
        allSkills.push(skill);
      }
    });
  });
  return allSkills;
};

console.log(findUniqueSkills());

const findCharactersWithSkill = (skill) => {
  const charactersWithSkill = characters.filter((player) => {
    return player.skills.includes(skill);
  });
  return charactersWithSkill;
};

console.log(findCharactersWithSkill("fire"));
