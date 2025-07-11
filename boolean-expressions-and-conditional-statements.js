/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in your program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:


Add Customization and expand the game:
  - Add more choices and scenarios
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = true; // changed from false to true
const hasSword = true; // Added a new item
const hasCompass = true; // Added another item  

console.log("You see two paths: one leads to the mountains, the other to the village.");
console.log("You see a torch, a map, and a sword."); // Added items to the scenario
const hasItems = readline.question("Type 'yes' if you have these items with you: ");
if (hasItems.toLowerCase() === 'yes') { // Checking if the player has items
  console.log("You have a torch, a map, a sword, and a compass with you.");
} 
else {
  console.log("You have no items with you. You need to find some!");
}

console.log("You can either go to the 'mountains' or the 'village'."); // Added more context to the scenario
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasItems.toLowerCase() === 'yes') {
  console.log("You safely navigate through the dark mountains.");
  if (hasTorch && hasSword && hasCompass || hasMap) { // Added nested condition for sword and compass/map
    console.log("You bravely venture deeper into the mountains with your sword and compass!");
    console.log("You find a hidden path leading to a treasure chest but there are wild creatures in the mountains!");
    console.log("You fend off wild creatures with your sword and explore the mountains to find hidden treasures!");
  } else {
    console.log("You carefully avoid wild creatures in the mountains.");
  } 
  const choice2 = readline.question("Do you want to explore further or return? (explore/return) ");
  if (choice2 === "explore") {
    console.log("You discover a hidden cave with the treasure chest! CONGRATULATIONS!!!"); // Added exploration outcome
  }
  else {
    console.log("You safely return to the starting point.");
  }

} 
else if (choice === "mountains" && hasItems !== 'yes') {
  console.log("It's too dark to proceed. You NEED to turn back.");
} 
else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} 
else {
  console.log("You get lost and wander aimlessly.");
}




