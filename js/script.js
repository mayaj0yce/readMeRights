// import fs 
const fs = require('fs');

// add to the end of a file
fs.appendFile('readMe.md', `${process.argv[2]}\n`, (err) =>
err ? console.error(err) : console.log('added')
);

const inquirer = require('inquirer');

//this is where the personal information is inserted
inquirer
.prompt([
    {
        type: "",
        message: "",
        name: "",
    },
    {
        type: "",
        message: "",
        name: "",
    },
    {
        type: "",
        message: "",
        name: "",
    },
    {
        type: "",
        message: "",
        name: "",
    },
    
])
.then((response) =>
   console.log('Success!', response.name)
);

//add in the html code here if i want to use just JS
//need to use the `${input}` from prompts inserted into the html^


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
