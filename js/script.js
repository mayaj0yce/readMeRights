// import fs 
const fs = require('fs');
const inquirer = require('inquirer');

// add to the end of a file
fs.appendFile('readMe.md', `${process.argv[2]}\n`, (err) =>
    err ? console.error(err) : console.log('added')
);


// const license = [ array of licenses that can be pulled from]
//this is where the personal information is inserted
const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
// 
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>

      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;


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
            // put this into HTML instead
            type: "input",
            name: "Table of contents",
            message: "",
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
            type: "list",
            name: "license",
            message: "choose your license",
            choices: [license,'',''],
        },
        {
            type: "input",            
            name: "Contributing",
            message: "",
        },
        {
            type: "input",            
            name: "Test",
            message: "What Tests have been done?",
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

    const renderLicense = (license) => {
        return [![license: ${license}]
  
      },

///fix that ^^^^^


//add in the html code here if i want to use just JS
//need to use the `${input}` from prompts inserted into the html^
//html that is just a readme? can i use a readME.md or do I need to use the html format


//my code ^^^

// TODO: What are we importing?
// const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log('Commit logged!')
// );

console.log(`${process.argv[2]}\n`)

// console.log(process.argv);


// function varAssign() {
// var Apple = process.argv [2];
// var Pears = process.argv [3];
// console.log(Apple)
// }
// varAssign();
// this comments the function outside of the process.argv console log
