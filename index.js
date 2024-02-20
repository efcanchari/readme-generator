const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How is your project tested?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    // Check if the file already exists
    if (fs.existsSync(fileName)) {
        const dirname = path.dirname(fileName);
        const extname = path.extname(fileName);
        const basename = path.basename(fileName, extname);
        const date = new Date();
        const dateString = date.toISOString().replace(/:/g, '-').split('.')[0];
        const newFileName = `${dirname}/${basename}-${dateString}${extname}`;

        // Use the new file name with timestamp
        fileName = newFileName;
    }

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    console.log('Welcome to the README generator');

    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
            console.log('Successfully created README.md');
        })
        .catch((error) => {
            console.log('An error occurred:', error);
        });
}

// function call to initialize program
init();
