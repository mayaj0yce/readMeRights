const fs = require('fs');
const inquirer = require('inquirer');

//gen html
const generateHTML = ({ title, description, installation, Usage, test, contributing, license, email, GitHubLink }) =>
    ` html here `;

//questions
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Title of your project:",
        },
        {
            type: "input",
            name: "Description",
            message: "Please give a short description of your project:",
        },
        {
            type: "input",
            name: "instalation",
            message: "How does one install the application?",
        },
        {
            type: "input",
            name: "Usage",
            message: "what can this application be used for?",
        },
        {
            type: "input",
            name: "Test",
            message: "What Tests have been done?",
        },
        {
            type: "input",
            name: "Contributing",
            message: "",
        },
        {
            type: "list",
            name: "license",
            message: "Select your license",
            choices: [
                'none',
                'Apache License 2.0',
                'MIT License',
                'The Unlicensed'],
        },
        {
            type: "input",
            name: "Email",
            message: "Enter a Valid Email",
        },
        {
            type: "input",
            name: "GitHubLink",
            message: "Provide GitHub LINK",
        },

    ])
    .then(answers => {
        const choice = answers.license;

        // Perform actions based on the choice using switch case
        switch (choice) {
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

      // Perform additional actions after the switch case
      return doSomethingElse();
    })

    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
