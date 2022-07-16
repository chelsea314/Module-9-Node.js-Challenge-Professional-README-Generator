// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['Apache 2.0 License', 'Creative Commons', 'Eclipse Public License 1.0', 'The MIT License' ]
        // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        // [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
        // [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
        // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    }
          
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
