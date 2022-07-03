// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  'What is your project title?',
  'What is the description of this project?',
  'What installation steps are required to run this?',
  'What instructions or examples are there using the project? (To add a screenshot, copy and paste the following and edit where necessary: ![alt text](assets/images/screenshot.png)',
  'What license does it use?',
  'Are there any contributing guidelines?',
  'What tests have you written to be able to run from the readme? You must write them here.',
  'What is your GitHub username? (Your Github profile will be added automatically)',
  'What is your email address? (To contact you.)',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Markdown file generated')
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'install',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'list',
        name: 'license',
        message: questions[4],
        choices: [
          'No License used.',
          'MIT License',
          'Apache License 2.0',
          'Mozilla Public License 2.0',
          'GNU GPLv3',
        ],
      },
      {
        type: 'list',
        name: 'contribute',
        message: questions[5],
        choices: [
          'Contributing guidelines: [Code of conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)',
          'To be decided on at a later date.',
        ],
      },
      {
        type: 'input',
        name: 'test',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'username',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
    ])
    .then((data) => writeToFile('README.md', generateMarkdown(data))); // making use of first-class functions: to use a function (i.e. generateMarkdown(data)) as the parameter inside another function.
}

init();
