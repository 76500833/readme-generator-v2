// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
let license = ""
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test Instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License: ',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub Username: ',
    }
];
// TODO: Create a function to write README file
const promptUser = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            const readme = generateMarkdown(answers);
            fs.writeFile("readme.md", readme, (err) => {
                err ? console.log(err) : console.log('Successfully created README!')
            })
        })
}



// TODO: Create a function to initialize app
function init() {
    promptUser(questions)
}

// Function call to initialize app
init();
