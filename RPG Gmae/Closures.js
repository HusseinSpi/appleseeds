const createPlayerCharacter = (name, initialLevel) => {
  let level = initialLevel;
  let xp = 0;
  return {
    name,
    level,
    xp,
    levelUp: function () {
      if (this.xp >= 100) {
        this.level++;
        this.xp -= 100;
        console.log(`${this.name} leveled up to level ${this.level}!`);
      } else {
        console.log("You do not have enough XP to level up");
      }
    },
    addXP: function (xpToAdd) {
      this.xp += xpToAdd;
      console.log(`${xpToAdd} XP added to ${this.name}'s total XP.`);
    },
  };
};

function createInventory() {
  const inventory = [];

  return {
    addItem: function (item) {
      inventory.push(item);
      console.log(`${item} added to inventory.`);
    },
    removeItem: function (item) {
      const index = inventory.indexOf(item);
      if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`${item} removed from inventory.`);
      } else {
        console.log(`${item} is not in the inventory.`);
      }
    },
    getItems: function () {
      return inventory;
    },
  };
}

function createAbility(name, power) {
  return {
    name: name,
    power: power,
    useAbility: function () {
      console.log(`${this.name} ability used with power ${this.power}.`);
    },
  };
}

function createEnemy(name, health) {
  return {
    name: name,
    health: health,
    attack: function () {
      console.log(`${this.name} is attacking!`);
    },
    reduceHealth: function (damage) {
      this.health -= damage;
      if (this.health > 0) {
        console.log(`${this.name} has ${this.health} health remaining.`);
      } else {
        console.log(`${this.name} has been defeated!`);
      }
    },
    isDefeated: function () {
      if (this.health <= 0) {
        return "Congratulations, hero, you killed the enemies";
      } else {
        return "The game is over, loser";
      }
    },
  };
}

const hussein = createPlayerCharacter("Hussein", 999);
console.log(hussein);

hussein.addXP(250);
hussein.levelUp();
hussein.levelUp();
hussein.levelUp();
console.log(hussein);

const inventory = createInventory();
inventory.addItem("Sword");
inventory.addItem("Shield");
console.log(inventory.getItems());
inventory.removeItem("Shield");
console.log(inventory.getItems());

const fireball = createAbility("Fireball", 200);
fireball.useAbility();

const enemy = createEnemy("Goblin", 100);
enemy.attack();
enemy.reduceHealth(30);
console.log(enemy.isDefeated());
enemy.reduceHealth(100);
console.log(enemy.isDefeated());
