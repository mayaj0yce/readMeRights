// import fs 
const fs = require('fs');
const inquirer = require('inquirer');

// add to the end of a file
fs.appendFile('readMe.md', `${process.argv[2]}\n`, (err) =>
err ? console.error(err) : console.log('added')
);


// const license = [ array of licenses that can be pulled from]
//this is where the personal information is inserted


inquirer
    .prompt([
    {
        type: "input",
        message: "Please give a short description of your project",
        name: "Description",
    }, 
    {
        // put this into HTML instead
        type: "input",
        message: "",
        name: "Table of contents",
    },
    {
        type: "input",
        message: "",
        name: "instalation",
    },
    {
        type: "input",
        message: "How can this be used",
        name: "Usage",
    },
    // {
    //     type: "list",
    //     message: "choose your license",
    //     name: "license",
    //     choices: [license,'',''],
    // },
    {
        type: "input",
        message: "",
        name: "Contributing",
    },
    {
        type: "input",
        message: "What Tests have been done?",
        name: "Test",
    },
    {
        type: "input",
        message: "Enter a Valide Email for Contact information",
        name: "Email",
    },
    {
        type: "input",
        message: "Provide GitHub LINK",
        name: "GitHub User",
    },
    
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });

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
