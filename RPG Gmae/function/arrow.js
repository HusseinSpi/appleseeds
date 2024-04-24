const player = {
  name: "John",
  health: 85,
  items: [
    {
      name: "Sword",
      value: 50,
    },
    {
      name: "Shield",
      value: 40,
    },
    {
      name: "Potion",
      value: 20,
    },
  ],
};

// 1. Simple Arrow Function Conversion
function getPlayerName(player) {
  return player.name;
}

const getPlayerName1 = (player) => {
  return player.name;
};

console.log(getPlayerName(player));
console.log(getPlayerName1(player));

function getPlayerHealth(health) {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
}

const getPlayerHealth1 = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};

console.log(getPlayerHealth(player.health));
console.log(getPlayerHealth1(player.health));

function getTotalInventoryValue(items) {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}

const getTotalInventoryValue1 = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
};

console.log(getTotalInventoryValue(player.items));
console.log(getTotalInventoryValue1(player.items));

// 4. Arrow Functions as Callbacks
const sortedItems = player.items.sort(function (a, b) {
  return b.value - a.value;
});

const sortedItems1 = player.items.sort((a, b) => {
  return b.value - a.value;
});

console.log(sortedItems);
console.log(sortedItems1);

// 5. Implicit Return with Arrow Functions
function getItemNames(items) {
  return items.map(function (item) {
    return item.name;
  });
}

const getItemNames1 = (items) => {
  return items.map((item) => {
    return item.name;
  });
};

console.log(getItemNames(player.items));
console.log(getItemNames1d(player.items));
