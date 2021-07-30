// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your emil address?',
        name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a describtion of the project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information for te project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for the project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test intrsuctions for the project',
        name: 'test',
    },
    {
        type: "list",
        message: "Which license would you like to choose for your Project?",
        name: "license",
        choices: [
            {value: "mit", name: "MIT License"},
            {value: "agpl-3.0", name: "GNU Affero General Public License v3.0"},
            {value: "gpl-3.0", name: "GNU General Public License v3.0"},
            {value: "mpl-2.0", name: "Mozilla Public License 2.0 (MPL 2.0)"},
            {value: "lgpl-3.0", name: "GNU Lesser General Public License v3.0"},
            {value: "apache-2.0", name: "Apache License, Version 2.0"}
        ]
    }
]

// TODO: Create a function to write README file
function writeToFile (fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if(err){
            return console.error(err)
            
        } else {
            return console.log(`Success ${fileName} has been created!`)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        renderFetch(data)
    })
}

function renderFetch (data) {

    const licenseKind = data.license;
    console.log(licenseKind);

    fetch(`https://api.github.com/licenses/${licenseKind}`)
   .then(res => res.json())
   .then(output => {
            console.log(output);
            const licUrl = output.html_url
            const licDes = output.description
            console.log(licUrl)
            console.log(licDes)
            writeToFile("DEMOREADME.md", generateMarkdown(data, licUrl, licDes))
            return licUrl, licDes
        })
        .catch((err) => {
            console.log(err);
  })
}

// Function call to initialize app
init();
