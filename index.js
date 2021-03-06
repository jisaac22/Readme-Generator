// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = () =>
   inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please give a description of project',
            name: 'description'
        },
        {
            type: 'list',
            message: 'What kind of license did you use?',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None' ],
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: "installation",
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: "What does the user need to know about using the repo?",
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: "contributions",
        },

]);

function generateMarkdown(data) {
return `# ${data.title}
${data.description}
    
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Test](#Test)
* [Questions](#Questions)
    
### Installations:
    Install the following dependencies to run 
${data.installation}
    
### Usage 
${data.usage}
    
### License
The License(s) being used is 
${data.license}
    
### Contributing
${data.contributions}
    
### Test
${data.tests}
    
### Questions
Here is my contact information for additional questions
Github: https://github.com/${data.github},
Email: ${data.email}
  `;
  }
  questions()
.then((data) => {
   fs.writeFile('README.md', generateMarkdown(data), (err) =>
       err ? console.log(err) : console.log("Wait for Readme.md")
       )}
);
