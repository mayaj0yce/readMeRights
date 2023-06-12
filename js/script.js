// import fs 
const fs = require('fs');

// add to the end of a file
fs.appendFile('readMe.md', `${process.argv[2]}\n`, (err) =>
err ? console.error(err) : console.log('added')
);
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


// if (Apple === Pears){
// true () 
    
// } else {
//     false
// }
