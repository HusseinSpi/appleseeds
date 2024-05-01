const gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createPlayer: function (
    name,
    health,
    power,
    position,
    inventory,
    characterClass
  ) {
    const newC = {
      name: name,
      health: health,
      power: power,
      position: position,
      inventory: [inventory],
      Abilities: null,
      xp: 0,
      level: 1,
      class: characterClass,
      move: function (newPosition) {
        this.position = newPosition;
      },
    };
    gameWorld.addPlayer(newC);
    return newC;
  },

  createEnemies: function (
    name,
    health,
    power,
    position,
    inventory,
    characterClass
  ) {
    const newC = {
      name: name,
      health: health,
      power: power,
      position: position,
      inventory: [inventory],
      Abilities: null,
      class: characterClass,
      move: function (newPosition) {
        this.position = newPosition;
      },
    };
    gameWorld.addEnemies(newC);
    return newC;
  },

  createNPC: function (name, health, position, inventory, dialog) {
    const newC = {
      name: name,
      health: health,
      position: position,
      inventory: [inventory],
      dialog: dialog,
      move: function (newPosition) {
        this.position = newPosition;
      },
    };
    gameWorld.addNPC(newC);
    return newC;
  },

  addPlayer: function (newPlayer) {
    this.players.push(newPlayer);
  },
  removePlayer: function (namePlayer) {
    const index = this.players.findIndex(
      (player) => player.name.toLowerCase() === namePlayer.toLowerCase()
    );
    if (index !== -1) {
      this.players.splice(index, 1);
      console.log(`${namePlayer} successfully removed.`);
    } else {
      console.log(`${namePlayer} not found in the game.`);
    }
  },

  addEnemies: function (nameEnemies) {
    this.enemies.push(nameEnemies);
  },
  removeEnemies: function (nameEnemies) {
    const index = this.enemies.findIndex(
      (enemies) => enemies.name.toLowerCase() === nameEnemies.toLowerCase()
    );
    if (index !== -1) {
      this.enemies.splice(index, 1);
      console.log(`${nameEnemies} successfully removed.`);
    } else {
      console.log(`${nameEnemies} not found in the game.`);
    }
  },

  addItem: function (nameItem) {
    this.items.push(nameItem);
  },
  removeItem: function (nameItem) {
    const index = this.items.findIndex(
      (items) => items.toLowerCase() === nameItem.toLowerCase()
    );
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${nameItem} successfully removed.`);
    } else {
      console.log(`${nameItem} not found in the game.`);
    }
  },

  addNPC: function (nameNPC) {
    this.npcs.push(nameNPC);
  },
  removeNPC: function (nameNPC) {
    const index = this.npcs.findIndex(
      (npcs) => npcs.toLowerCase() === nameNPC.toLowerCase()
    );
    if (index !== -1) {
      this.npcs.splice(index, 1);
      console.log(`${nameNPC} successfully removed.`);
    } else {
      console.log(`${nameNPC} not found in the game.`);
    }
  },
};

function pickUpItem(character, item) {
  if (!character || !character.inventory) {
    console.log("Invalid character object");
    return;
  }

  character.inventory.push(item);
  console.log(`${item} has been added to ${character.name}'s inventory.`);
}

function useItem(character, item) {
  if (!character || !character.inventory) {
    console.log("Invalid character object");
    return;
  }

  const itemIndex = character.inventory.findIndex(
    (i) => i.toLowerCase() === item.toLowerCase()
  );

  if (itemIndex === -1) {
    console.log(`${item} is not in ${character.name}'s inventory.`);
    return;
  }

  switch (item) {
    case "Health":
      character.health += 40;
      break;
    case "mana":
      character.mana += 50;
      break;
    case "poison":
      character.health -= 20;
      break;

    default:
      break;
  }

  character.inventory.splice(itemIndex, 1);
  console.log(`${character.name} used ${item}.`);
}

const addAbilities = (character, abilities) => {
  if (!character) {
    console.log("Invalid character object");
    return;
  }

  character.Abilities = abilities;
};

// gameWorld.addPlayer("hussein");
// gameWorld.addPlayer("ahmad");
// gameWorld.addPlayer("loay");
// console.log(gameWorld.players);
// gameWorld.removePlayer("loay");
// console.log(gameWorld.players);

// gameWorld.addEnemies("batman");
// gameWorld.addEnemies("spiderman");
// gameWorld.addEnemies("superman");
// console.log(gameWorld.enemies);
// gameWorld.removeEnemies("spiderman");
// console.log(gameWorld.enemies);

// gameWorld.addItem("sword");
// gameWorld.addItem("bow");
// gameWorld.addItem("shield");
// console.log(gameWorld.items);
// gameWorld.removeItem("bow");
// console.log(gameWorld.items);

// gameWorld.addNPC("one");
// gameWorld.addNPC("tow");
// gameWorld.addNPC("three");
// console.log(gameWorld.npcs);
// gameWorld.removeNPC("tow");
// console.log(gameWorld.npcs);

const husseinPlayer = gameWorld.createPlayer(
  "hussein",
  100,
  30,
  [3, 9],
  "magical stick",
  "mage"
);

const darthVader = gameWorld.createEnemies(
  "Darth Vader",
  100,
  20,
  [3, 5],
  "sword",
  "warrior"
);

husseinPlayer.move([3, 5]);
console.log(husseinPlayer);

console.log(darthVader);

const fight = (players, enemies) => {
  if (
    players.position[0] === enemies.position[0] ||
    players.position[1] === enemies.position[1]
  ) {
    while (players.health > 0 || enemies.health > 0) {
      switch (players.Abilities) {
        case "fire":
          let extraDamage = Math.floor(Math.random() * 10);
          fullDamage = players.power + extraDamage;
          enemies.health -= fullDamage;
          console.log(`${enemies.name} : -${fullDamage}`);
          break;
        case "electricity":
          extraDamage = Math.floor(Math.random() * 7);
          fullDamage = players.power + extraDamage;
          enemies.health -= fullDamage;
          console.log(`${enemies.name} : -${fullDamage}`);
          break;
        case "ice":
          extraDamage = Math.floor(Math.random() * 5);
          fullDamage = players.power + extraDamage;
          enemies.health -= fullDamage;
          console.log(`${enemies.name} : -${fullDamage}`);
          break;
        default:
          enemies.health -= players.power;
          console.log(`${enemies.name} : -${players.power}`);
          break;
      }
      if (enemies.health <= 0) {
        console.log(`${players.name} win`);
        gameWorld.removeEnemies(enemies.name);
        players.xp += 445;
        console.log(`You have earned 445 experience points`);
        return;
      }
      switch (enemies.Abilities) {
        case "fire":
          let extraDamage = Math.floor(Math.random() * 10);
          fullDamage = enemies.power + extraDamage;
          players.health -= fullDamage;
          console.log(`${players.name} : -${fullDamage}`);
          break;
        case "electricity":
          extraDamage = Math.floor(Math.random() * 7);
          fullDamage = enemies.power + extraDamage;
          players.health -= fullDamage;
          console.log(`${players.name} : -${fullDamage}`);
          break;
        case "ice":
          extraDamage = Math.floor(Math.random() * 5);
          fullDamage = enemies.power + extraDamage;
          players.health -= fullDamage;
          console.log(`${players.name} : -${fullDamage}`);
          break;
        default:
          players.health -= enemies.power;
          console.log(`${players.name} : -${enemies.power}`);
          break;
      }
      if (players.health <= 0) {
        console.log(`${enemies.name} win`);
        gameWorld.removePlayer(players.name);
        return;
      }
    }
  }
};

const levelUp = (character) => {
  if (!character) {
    console.log("Invalid character object");
    return;
  }
  while (character.xp >= 100) {
    character.xp -= 100;
    character.level += 1;
    console.log(`levelUp ${character.level}`);
  }
};

addAbilities(husseinPlayer, "fire");
fight(husseinPlayer, darthVader);
console.log(gameWorld.enemies);

pickUpItem(husseinPlayer, "Health");

console.log(husseinPlayer);

useItem(husseinPlayer, "Health");

console.log(husseinPlayer);

useItem(husseinPlayer, "Health");

levelUp(husseinPlayer);

console.log(husseinPlayer);

const NPCStup = gameWorld.createNPC(
  "yamen",
  100,
  [3, 9],
  "water",
  "Hello sir, can you help me please, some bandits stole my things, can you return them to me in exchange for money?"
);

const dialog = (character, npc) => {
  if (
    character.position[0] === npc.position[0] &&
    character.position[1] === npc.position[1]
  ) {
    console.log(npc.dialog);
  }
};

NPCStup.move([3, 5]);

dialog(husseinPlayer, NPCStup);
