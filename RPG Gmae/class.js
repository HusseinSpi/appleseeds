class Character {
  constructor(name, health, strength, defense) {
    this.name = name;
    this._health = health;
    this.strength = strength;
    this.defense = defense;
    this.quests = [];
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value < 0 ? 0 : value;
  }

  attack(target) {
    const damage = this.strength - target.defense;
    target.receiveDamage(damage);
  }

  receiveDamage(damage) {
    this._health -= damage;
    if (this._health <= 0) {
      this._health = 1;
    }
  }

  displayStats() {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}`
    );
  }

  characterType() {
    return "This is a basic character.";
  }
  acceptQuest(quest) {
    this.quests.push(quest);
    console.log(`${this.name} has accepted the quest: ${quest.name}`);
  }

  completeQuest(quest) {
    const enemiesDefeated = quest.requiredEnemies.every(
      (enemy) => enemy.health <= 0
    );
    if (enemiesDefeated) {
      quest.completedQuest();
      console.log(
        `${this.name} has completed the quest: ${quest.name} and received the reward: ${quest.reward}`
      );
    } else {
      console.log(
        `${this.name} has not defeated all the required enemies for the quest: ${quest.name}`
      );
    }
  }

  receiveReward(quest) {
    if (quest.completed) {
      console.log(
        `${this.name} has received the reward: ${quest.reward} for completing the quest: ${quest.name}`
      );
    } else {
      console.log(
        `${this.name} cannot receive the reward for the quest: ${quest.name} because it has not been completed yet.`
      );
    }
  }
}

class Knight extends Character {
  constructor(name, health, strength, defense, armor) {
    super(name, health, strength, defense);
    this.armor = armor;
    this.defense += this.armor;
  }

  shieldAttack(target) {
    const damage = this.strength - target.defense;
    target.receiveDamage(damage);
  }

  displayStats() {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}, Armor: ${this.armor}`
    );
  }

  characterType() {
    return "This is a knight.";
  }
}

class Mage extends Character {
  constructor(name, health, strength, defense, mana) {
    super(name, health, strength, defense);
    this.mana = mana;
  }
  castSpell(target) {
    if (this.mana >= 10 && target !== this) {
      const damage = this.strength - target.defense + 10;
      target.receiveDamage(damage);
      this.mana -= 10;
    }
  }

  displayStats() {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}, Mana: ${this.mana}`
    );
  }

  characterType() {
    return "This is a Mage.";
  }
}

class Quest {
  constructor(name, description, reward, requiredEnemies) {
    this.name = name;
    this.description = description;
    this.reward = reward;
    this.requiredEnemies = requiredEnemies;
    this.completed = false;
  }
  completedQuest() {
    this.completed = true;
  }
}

class Terrain {
  constructor(name) {
    this.name = name;
  }
}

class Forest extends Terrain {
  constructor(name) {
    super(name);
  }

  modifyCharacter(character) {
    if (character instanceof Mage) {
      character.mana += 10;
      console.log(
        `${character.name}'s mana has been boosted by 10 in the ${this.name} terrain.`
      );
    }
    return character;
  }
}

class Desert extends Terrain {
  constructor(name) {
    super(name);
  }

  modifyCharacter(character) {
    character.strength -= 2;
    character.defense -= 1;
    console.log(
      `${character.name}'s strength and defense have been reduced in the ${this.name} terrain.`
    );
    return character;
  }
}

class Castle extends Terrain {
  constructor(name) {
    super(name);
  }

  modifyCharacter(character) {
    if (character instanceof Knight) {
      character.defense += 5;
      console.log(
        `${character.name}'s defense has been boosted by 5 in the ${this.name} terrain.`
      );
    }
    return character;
  }
}
