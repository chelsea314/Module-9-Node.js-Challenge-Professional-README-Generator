// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Contents
  * Description
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  # Description
  ${data.description}
  
  # Installation
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  # Contributing
  ${data.contributing}
  
  # Tests
  ${data.tests}
  
  # Questions
  ${data.gitUsername} 
  
  ${data.email}`;
}

module.exports = generateMarkdown;









// {
//   type: 'list',
//   message: 'Select the license you would like to include.',
//   name: 'license',
//   choices: ['Apache 2.0 License', 'Creative Commons', 'The MIT License' ]
//   // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//   // [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
//   // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// },