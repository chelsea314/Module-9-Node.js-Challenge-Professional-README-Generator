// TODO: Include packages needed for this application
var inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


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
function writeToFile(fileName, data) {
    return fs.writeFile('newREADME.md', fileName, (err) => 
    err ? console.log(err) : console.log('Success! Your README has been created!')
    );
};


// TODO: Create a function to initialize app
// prompt questions then take response; write to file geneerate read me, g
function init() {
   inquire.prompt(questions)
   .then((data) => {
        console.log(data);
        let stringData = JSON.stringify(data)
        console.log(stringData)
        // let newREADME = generateREADME()
        writeToFile('README.md', generateMarkdown({...stringData}));
    });
}

// Function call to initialize app
init();
