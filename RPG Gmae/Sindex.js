const day = "friday";

switch (day) {
  case "sunday":
    console.log("Marshmello party");
    break;
  case "monday":
    console.log("Special event happening!");
    break;
  case "tuesday":
    console.log("war3");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "saturday":
  case "friday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

const themeColor = "dark";

switch (themeColor) {
  case "light":
    console.log("the theme is light");
    break;
  case "dark":
    console.log("the theme is dark");
    break;
  case "dungeon":
    console.log("the theme is dungeon");
    break;
  default:
    console.log("unsupported color theme");
}

let questStatus = "new";

switch (questStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log("You have new quests awaiting");
    break;
  default:
    console.log("completed quests");
}

let inventoryItem = "Sword";

switch (inventoryItem) {
  case "Sword":
    console.log(`you have ${inventoryItem}`);
    break;
  case "Potion":
    console.log(`you have ${inventoryItem}`);
    break;
  case "Shield":
    console.log(`you have ${inventoryItem}`);
    break;
  default:
    console.log("you need weapon");
}

let playerScore = 98;

switch (true) {
  case playerScore >= 90:
    console.log("you're Legend");
    break;
  case playerScore < 90 && playerScore >= 70:
    console.log("you're Champion");
    break;
  case playerScore < 70:
  default:
    console.log("you're Rookie");
}

const questMonth = "September";
switch (questMonth) {
  case "January":
    console.log("Ice Kingdom Adventure");
    break;
  case "February":
    console.log("Valentine's Day Special");
    break;
  case "March":
    console.log("Easter Egg Hunt");
    break;
  case "April":
    console.log("Flower Fastival Celebration");
    break;
  case "May":
    console.log("Summer Solstice Quest");
    break;
  case "June":
    console.log("Beach Party Bonanza");
    break;
  case "July":
    console.log("Underwater Expedition");
    break;
  case "August":
    console.log("Harvest Festival Quest");
    break;
  case "September":
    console.log("Spring Bloosom Hunt");
    break;
  case "October":
    console.log("Haunted Mansion Mystery");
    break;
  case "November":
    console.log("Turkey Trot Adventure");
    break;
  case "December":
    console.log("Frosty Festivities");
    break;
  default:
    console.log("invalid month for quest");
}

const playerInput = "hussein";

switch (typeof playerInput) {
  case "string":
    console.log("string");
    break;
  case "number":
    console.log("number");
    break;
  case "boolean":
    console.log("boolean");
  default:
    break;
}

const updateMonth = 9;

switch (updateMonth) {
  case 1:
    console.log("Game schedule update for Quarter 1");
    break;
  case 2:
    console.log("Game schedule update for Quarter 2");
    break;
  case 3:
    console.log("Game schedule update for Quarter 3");
    break;
  case 4:
    console.log("Game schedule update for Quarter 4");
    break;
  case 5:
    console.log("Game schedule update for Quarter 5");
    break;
  case 6:
    console.log("Game schedule update for Quarter 6");
    break;
  case 7:
    console.log("Game schedule update for Quarter 7");
    break;
  case 8:
    console.log("Game schedule update for Quarter 8");
    break;
  case 9:
    console.log("Game schedule update for Quarter 9");
    break;
  case 10:
    console.log("Game schedule update for Quarter 10");
    break;
  case 11:
    console.log("Game schedule update for Quarter 11");
    break;
  case 12:
    console.log("Game schedule update for Quarter 12");
    break;
  default:
    console.log(
      "Invalid month entered. Please enter a number between 1 and 12."
    );
}
