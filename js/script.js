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
            message: "Title of your project",
        },
        {
            type: "input",
            name: "Description",
            message: "Please give a short description of your project",
        },
        {
            type: "input",
            name: "instalation",
            message: "",
        },
        {
            type: "input",
            name: "Usage",
            message: "How can this be used",
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
            message: "choose your license",
            choices: ['none', 'Apache License 2.0', 'MIT License'],
        },
        {
            type: "input",
            name: "Email",
            message: "Enter a Valide Email for Contact information",
        },
        {
            type: "input",
            name: "GitHubLink",
            message: "Provide GitHub LINK",
        },

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
