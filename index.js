// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// import{renderLicenseBadge, renderLicenseLink, renderLicenseSection};
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const askerUserAndWriteFile = async () => {
    try {
        const questions = await inquirer.prompt([
            {
                type: 'input',
                message: 'What is your GitHub Username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the title of your repository?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is a description of the application?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'How do you install it and get it running?',
                name: 'install',
            },
            {
                type: 'input',
                message: 'How do you operate the application?',
                name: 'test',
            },
            {
                type: 'input',
                message: 'Who contributed to it? Include yourself and any GitHub URLs',
                name: 'contrib',
            },
            {
                type: 'checkbox',
                message: 'Do you have a license?',
                name: 'license',
                choices: ['Yes', 'No'],
            },
        ]);

let readMe = `# ${questions.title}

## Description

${questions.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${questions.install}

## Usage

${questions.test}

## Credits

${questions.contrib}

## License

${generateMarkdown()}

## Questions

${questions.email}`
        
    // await fs.promises.writeFile('README.md', readMe);
    writeToFile(readMe);
        
    
    } catch (err) {
        console.log(err);
    }
}



// TODO: Create a function to write README file
async function writeToFile(readMe) {
    await fs.promises.writeFile('README.md', readMe);
}



// TODO: Create a function to initialize app
function init() {
    askerUserAndWriteFile();
}

// Function call to initialize app
init();
