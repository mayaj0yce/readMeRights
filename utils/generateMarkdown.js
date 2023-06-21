const inquirer = require('inquirer');

function chooseLicense(license) {
  // Mapping of choices to additional information
  const addChoiceEnd = {
    "None": "No License was chosen. Copyright Restrictions: Without a license, users have no permissions to use, modify, or distribute the software, and they must seek explicit permission from the copyright holder.",
    "Apache License": "apache-2.0. Permissive: The Apache License is also a permissive license that allows users to use, modify, and distribute the software. It includes a patent grant, providing protection against patent claims for users of the software. ",
    "MIT": "mit. It requires that the original copyright notice and license terms be included in the distributed software. They grant certain permissions to users, such as the right to use, copy, modify, and distribute the software.",
  };

  // Check if license exists in the mapping
  if (addChoiceEnd.hasOwnProperty(license)) {
    // Set the result with license and additional information
    console.log("You selected '" + license + "'. " + addChoiceEnd[license]);

    // Use license in another JavaScript code
    anotherFunction(license);
  } else {
    // Invalid license
    console.log("Invalid license. Please try again.");
  }


// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  // Generate license badge based on the license type
  switch (license) {
    case 'none':
      // No license badge
      break;
    case 'Apache License 2.0':
      licenseBadge = '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT License':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'The Unlicensed':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      // Invalid or unrecognized license
      break;
  }

  return licenseBadge;
}

const licenseBadge = renderLicenseBadge(license);

console.log(licenseBadge); // Outputs the generated license badge


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


// Prompt the user for a license
var license = prompt("Please enter your license (none, Apache License 2.0, MIT License, The Unlicensed):");

// Perform different actions based on the license
if (license === "none") {
  // Additional information for license "none"
  console.log("You selected 'none'. Additional information for 'none'.");
} else if (license === "Apache License 2.0") {
  // Additional information for license "Apache License 2.0"
  console.log("You selected 'Apache License 2.0'. Additional information for 'Apache License 2.0'.");
} else if (license === "MIT License") {
  // Additional information for license "MIT License"
  console.log("You selected 'MIT License'. Additional information for 'MIT License'.");
} else if (license === "The Unlicensed") {
  // Additional information for license "The Unlicensed"
  console.log("You selected 'The Unlicensed'. Additional information for 'The Unlicensed'.");
} else {
  // Invalid license
  console.log("Invalid license. Please try again.");
}
