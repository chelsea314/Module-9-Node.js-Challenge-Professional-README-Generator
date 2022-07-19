// TODO: Include packages needed for this application
var inquire = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description for the README.',
        name: 'description',   
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter the test instructions.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select the license you would like to include.',
        name: 'license',
        choices: ['Apache 2.0 License', 'Creative Commons', 'The MIT License', 'none' ]
    },
    {
        type: 'input',
        message: 'Enter Github username',
        name: 'gitUsername',
    },
    {
        type: 'input',
        message: 'Enter email address.',
        name: 'email',
    }     
]


// TODO: Create a function to write README file
function writeToFile(fileName) {
    // Creates readme file with user data
    return fs.writeFile('newREADME.md', fileName, (err) => 
    err ? console.log(err) : console.log('Success! Your README has been created!')
    );
};


// TODO: Create a function to initialize app
// prompt questions then take response; write to file geneerate read me, g
function init() {
    // Begins questioning user
   inquire.prompt(questions)
    // Let's user complete all questions then uses user answers   
   .then((data) => {
        // Turns data to string
        let createREADME = generateREADME(data);
        // Sends to writeToFile function with stringified data
        writeToFile(createREADME);
    });
}

// Function call to initialize app
init();
