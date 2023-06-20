const inquirer = require('inquirer');

function handleChoice(choice) {
  // Mapping of choices to additional information
  const additionalInfo = {
    "A": "Additional information for 'A'.",
    "B": "Additional information for 'B'.",
    "C": "Additional information for 'C'.",
    // Add more choices and additional information here
  };

  // Check if choice exists in the mapping
  if (additionalInfo.hasOwnProperty(choice)) {
    // Set the result with choice and additional information
    console.log("You selected '" + choice + "'. " + additionalInfo[choice]);

    // Use choice in another JavaScript code
    anotherFunction(choice);
  } else {
    // Invalid choice
    console.log("Invalid choice. Please try again.");
  }
}

// Prompt the user for a choice and call the function
inquirer
  .prompt([
    {
      type: 'input',
      name: 'choice',
      message: "Please enter your choice (A, B, C):",
    }
  ])
  .then(answers => {
    const userChoice = answers.choice;
    handleChoice(userChoice);
  })
  .catch(error => {
    console.log("Error occurred:", error);
  });

  
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


// Prompt the user for a choice
var choice = prompt("Please enter your choice (none, Apache License 2.0, MIT License, The Unlicensed):");

// Perform different actions based on the choice
if (choice === "none") {
  // Additional information for choice "none"
  console.log("You selected 'none'. Additional information for 'none'.");
} else if (choice === "Apache License 2.0") {
  // Additional information for choice "Apache License 2.0"
  console.log("You selected 'Apache License 2.0'. Additional information for 'Apache License 2.0'.");
} else if (choice === "MIT License") {
  // Additional information for choice "MIT License"
  console.log("You selected 'MIT License'. Additional information for 'MIT License'.");
} else if (choice === "The Unlicensed") {
  // Additional information for choice "The Unlicensed"
  console.log("You selected 'The Unlicensed'. Additional information for 'The Unlicensed'.");
} else {
  // Invalid choice
  console.log("Invalid choice. Please try again.");
}
