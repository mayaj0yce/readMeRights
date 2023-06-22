const fs = require('fs');
const inquirer = require('inquirer');

const promptUserInputs = () => {
    return inquirer.prompt([


        {
            type: "input",
            name: "title",
            message: "Title of your project:",
        },
        {
            type: "input",
            name: "description",
            message: "Please give a short description of your project:",
        },
        {
            type: "input",
            name: "instalation",
            message: "How does one install the application?",
        },
        {
            type: "input",
            name: "usage",
            message: "what can this application be used for?",
        },
        {
            type: "input",
            name: "test",
            message: "What Tests have been done?",
        },
        {
            type: "input",
            name: "contributing",
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
            name: "email",
            message: "Enter a Valid Email",
        },
        {
            type: "input",
            name: "gitHubLink",
            message: "Provide GitHub LINK",
        },

    ]);
};

//gen html
const generateHTML = ({ title, description, installation, usage, test, contributing, license, email, gitHubLink }) => {

let licenseBadgeLink = '';

switch (license) {
  case 'Apache License 2.0':
    licenseBadgeLink = 'https://img.shields.io/badge/license-Apache%202.0-blue.svg';
    break;
  case 'MIT License':
    licenseBadgeLink = 'https://img.shields.io/badge/license-MIT-green.svg';
    break;
  case 'The Unlicensed':
    licenseBadgeLink = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    break;
  default:
    // For 'none' or any other unknown license, no badge is displayed
    break;
}

let licenseDescription = '';

switch (license) {
    case 'Apache License 2.0':
      licenseDescription = 'apache-2.0. Permissive: The Apache License is also a permissive license that allows users to use, modify, and distribute the software. It includes a patent grant, providing protection against patent claims for users of the software. ';
      break;
    case 'MIT License':
      licenseDescription = 'mit. It requires that the original copyright notice and license terms be included in the distributed software. They grant certain permissions to users, such as the right to use, copy, modify, and distribute the software.';
      break;
    case 'The Unlicensed':
      licenseDescription = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
      case 'none':
        licenseDescription = 'No License was chosen. Copyright Restrictions: Without a license, users have no permissions to use, modify, or distribute the software, and they must seek explicit permission from the copyright holder.'
    default:
      // For 'none' or any other unknown license, no badge is displayed
      break;
  }

const htmlContent =  `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>${title}</title>
    </head>
    
    <body>
        <header class="p-5 mb-4 header bg-light">
            <div class="container">
            <h1 class="display-4">Project: ${title}</h1>
            <div class="licensingDisplay">
                ${licenseBadgeLink ? `<img src="${licenseBadgeLink}" alt="License Badge">` : ''}
            </div>
        </header>
        <div class="container">
    
            <h2>Table of Contents</h2>
            <div>
                <ul>
                    <li><a href="description">Description</a></li>
                    <li><a href="#installation">Installation</a></li>
                    <li><a href="#usage">Usage</a></li>
                    <li><a href="#test">Test</a></li>
                    <li><a href="#contributing">Contributing</a></li>
                    <li><a href="#license">License</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <div class="container" id="description">
                    <h2> ${description} </h2>
                </div>
    
    
                <div class="container" id="installation">
                    <h2> ${installation}</h2>
                </div>
    
                <div class="container" id="usage">
                    <h2> ${usage}</h2>
                </div>
    
                <div class="container" id="test">
                    <h2> ${test}</h2>
                </div>
    
                <div class="container" id="contributing">
                    <h2> ${contributing}</h2>
                </div>
    
                <div class="container" id="license">
                    <a href=" https://opensource.org/licenses/${license}"></a>
                    <h2> ${licenseDescription}</h2>
    
                </div>
    
                <div class="container" id="contact">
                    <h3>Questions? Contact Me</h3>
                    <ul class="list-unstyled">
                        <li>
                            <a href="https://github.com/${gitHubLink}">GitHub Profile</a>
                        </li>
                        <li>
                            <a
                                href="mailto:${email}?subject=Question&body=I%20have%20a%20question%20regarding%20your%20project.">Send
                                Email</a>
                        </li>
    
                    </ul>
                </div>
            </div>
        </div>
    </body>
    <footer class="footer">
        <div class="container text-center">
            <span>copyright @mayaj0yce 2023</span>
        </div>
    </footer>
    
    </html>`;
 
    return htmlContent;
};
promptUserInputs()
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });