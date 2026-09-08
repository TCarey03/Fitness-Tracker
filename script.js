console.log("Script Loaded");

let userName = "Alex";

alert("Welcome to the Fitness Tracker, " + userName + "!");

// Ask the user for workout information
let weightLifted = prompt("How much weight did you lift?");
let repsPerformed = prompt("How many reps did you perform?");

// Convert the prompt values from strings to numbers
weightLifted = Number(weightLifted);
repsPerformed = Number(repsPerformed);

// Calculate total volume
let totalVolume = weightLifted * repsPerformed;

// Display the result in the console
console.log("Total Volume: " + totalVolume);
