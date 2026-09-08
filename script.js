console.log("Script Loaded");

let userName = "Alex";

alert("Welcome to the Fitness Tracker, " + userName + "!");

// Ask the user for workout information
let weightLifted = prompt("How much weight did you lift?");
let repsPerformed = prompt("How many reps did you perform?");

// Convert the values to numbers
weightLifted = Number(weightLifted);
repsPerformed = Number(repsPerformed);

// Calculate total volume
let totalVolume = weightLifted * repsPerformed;

// Create a message using the user's name and total volume
let message = "Great job, " + userName + "! You moved " + totalVolume + " units today!";

// Display the message on the webpage
document.getElementById("status").textContent = message;

// Display the message in the console
console.log(message);
