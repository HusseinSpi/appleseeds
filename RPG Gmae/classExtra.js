class Character {
  #inventory;
  #health;
  #level;
  constructor(name, level, health) {
    this.name = name;
    this.#level = level >= 0 ? level : 0;
    this.#health = health >= 0 ? health : 0;
    this.#inventory = [];
  }

  set health(n) {
    this.#health = n < 0 ? 0 : n;
  }

  get health() {
    return this.#health;
  }

  set level(n) {
    this.#level = n < 0 ? 0 : n;
  }

  get level() {
    return this.#level;
  }

  addItem(item) {
    if (item instanceof Item) {
      this.#inventory.push(item);
    } else {
      console.log("error: not an item");
    }
  }

  get inventory() {
    return this.#inventory;
  }

  get totalValue() {
    if (this.#inventory.length === 0) {
      return "inventory is empty";
    }
    return this.#inventory.reduce((total, item) => total + item.value, 0);
  }

  displayCharacterStats() {
    return `name: ${this.name}, level: ${this.#level}, health: ${this.#health}`;
  }
}

class Warrior extends Character {
  #strength;
  #defense;
  constructor(name, level, health, defense, strength) {
    super(name, level, health);
    this.#defense = defense >= 0 ? defense : 0;
    this.#strength = strength >= 0 ? strength : 0;
  }

  set strength(n) {
    this.#strength = n < 0 ? 0 : n;
  }

  get strength() {
    return this.#strength;
  }

  set defense(n) {
    this.#defense = n < 0 ? 0 : n;
  }

  get defense() {
    return this.#defense;
  }

  displayCharacterStats() {
    return `name: ${this.name}, level: ${this.level}, health: ${
      this.health
    }, defense: ${this.#defense}, strength: ${this.#strength}`;
  }
}

class Mage extends Character {
  #mana;
  #intelligence;
  constructor(name, level, health, mana, intelligence) {
    super(name, level, health);
    this.#mana = mana >= 0 ? mana : 0;
    this.#intelligence = intelligence >= 0 ? intelligence : 0;
  }

  get mana() {
    return this.#mana;
  }

  set mana(n) {
    this.#mana = n < 0 ? 0 : n;
  }

  get intelligence() {
    return this.#intelligence;
  }

  set intelligence(n) {
    this.#intelligence = n < 0 ? 0 : n;
  }

  displayCharacterStats() {
    return `name: ${this.name}, level: ${this.level}, health: ${
      this.health
    }, mana: ${this.#mana}, intelligence: ${this.#intelligence}`;
  }
}

class Item {
  #value;
  #name;
  constructor(name, value) {
    this.#name = name;
    this.#value = value > 0 ? value : 1;
  }

  get value() {
    return this.#value;
  }

  set value(n) {
    this.#value = n <= 0 ? 1 : n;
  }

  get name() {
    return this.#name;
  }

  set name(n) {
    if (n === "") {
      console.log("the name can't be empty");
      return;
    }
    this.#name = n;
  }
}

class Weapon extends Item {
  #damage;
  #type;
  constructor(name, value, damage, type) {
    super(name, value);
    this.#damage = damage > 0 ? damage : 1;
    this.#type = type;
  }

  get damage() {
    return this.#damage;
  }

  set damage(n) {
    this.#damage = n <= 0 ? 1 : n;
  }

  get type() {
    return this.#type;
  }

  set type(n) {
    if (n === "") {
      console.log("the type can't be empty");
      return;
    }
    this.#type = n;
  }
}

class Armor extends Item {
  #protection;
  #material;
  constructor(name, value, protection, material) {
    super(name, value);
    this.#protection = protection > 0 ? protection : 1;
    this.#material = material;
  }

  get protection() {
    return this.#protection;
  }

  set protection(n) {
    this.#protection = n <= 0 ? 1 : n;
  }

  get material() {
    return this.#material;
  }

  set material(n) {
    if (n === "") {
      console.log("the material can't be empty");
      return;
    }
    this.#material = n;
  }
}

class Game {
  #characters;
  #currentCharacter;
  constructor() {
    this.#characters = [];
    this.#currentCharacter = null;
  }

  addCharacter(character) {
    if (character instanceof Character) {
      this.#characters.push(character);
    } else {
      console.log("the character is not a character");
    }
  }

  set currentCharacter(name) {
    const character = this.#characters.find(
      (character) => character.name === name
    );
    if (character) {
      this.#currentCharacter = character;
    } else {
      console.log("character was not found");
    }
  }

  get currentCharacter() {
    return this.#currentCharacter;
  }

  calculateDamage(attacker, defender) {
    let totalDamage = 0;
    switch (true) {
      case attacker instanceof Warrior:
        totalDamage = attacker.strength * attacker.level;
        break;
      case attacker instanceof Mage:
        totalDamage = attacker.intelligence + attacker.level;
        break;
      case attacker instanceof Character:
        console.log("This character cannot fight");
        return;
      default:
        console.log("the attacker is not a character");
        return;
    }

    let totalDefense = 0;
    switch (true) {
      case defender instanceof Warrior:
        totalDefense = defender.defense;
        break;
      case defender instanceof Mage:
        totalDefense = defender.mana / 2;
        break;
      case defender instanceof Character:
        console.log("This character cannot fight");
        return;
      default:
        console.log("the defender is not a character");
        return;
    }

    const damage = Math.max(0, totalDamage - totalDefense);
    defender.health -= damage;
    console.log(
      `${attacker.name} hit ${defender.name} with a force of ${damage}`
    );
  }

  battle(attacker, defender) {
    const attackerRoll = Math.floor(Math.random() * 20) + 1;
    const defenderRoll = Math.floor(Math.random() * 20) + 1;

    let damage = 0;
    if (attackerRoll > defenderRoll) {
      damage = this.calculateDamage(attacker, defender) + attackerRoll;
    } else {
      damage = this.calculateDamage(defender, attacker) + defenderRoll;
    }

    if (defender.health <= 0) {
      attacker.level += 1;
      defender.level -= 1;
      console.log(`${attacker.name} wins! ${defender.name} has been defeated.`);
      return `${attacker.name} wins! Remaining health: ${attacker.health}`;
    } else {
      console.log(`Battle continues...`);
      return `Battle continues... ${attacker.name}'s health: ${attacker.health}, ${defender.name}'s health: ${defender.health}`;
    }
  }

  displayStatus() {
    const statusReport = [];

    this.#characters.forEach((character) => {
      const isCurrentCharacter = character === this.currentCharacter;
      const status = `Name: ${character.name}, Health: ${
        character.health
      }, Level ${character.level} ${
        isCurrentCharacter ? "(Current Character)" : ""
      }`;
      statusReport.push(status);
    });

    const formattedReport = statusReport.join("\n");
    console.log(formattedReport);
  }
}

const omar = new Character("omar", 5, 100);
console.log(omar.name);
console.log(omar.level);
console.log(omar.health);
omar.health = -50;
console.log(omar.health);
omar.level = -50;
console.log(omar.level);
const sword = new Item("sword", 5);
const bow = new Item("bow", 10);
omar.addItem(bow);
omar.addItem(sword);
omar.inventory.forEach((item) => console.log(item.name));
console.log(omar.totalValue);
console.log(omar.displayCharacterStats());

const hussien = new Warrior("hussien", 99, 100, 100, 20);
console.log(hussien.name);
console.log(hussien.level);
console.log(hussien.health);
console.log(hussien.displayCharacterStats());

const wizard = new Mage("wizard", 5, 100, 100, 50);
console.log(wizard.displayCharacterStats());

const armor = new Armor("steel armor", 100, 50, "steel");
console.log(armor.name);

const game = new Game();
game.addCharacter(omar);
game.addCharacter(hussien);
game.addCharacter(wizard);
game.currentCharacter = "hussien";
game.battle(hussien, wizard);
game.displayStatus();
