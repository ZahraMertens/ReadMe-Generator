// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const generateMarkdown = require("./assets/utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your GitHub username',
        name: 'username',
        validate: function (input) {
            if (input === ""){
                return "GitHub username must be entered"
            } 
            return true
        }
    },
    {
        type: 'input',
        message: 'What is your emil address?',
        name: 'email',
        validate: function (input) {
            if (input === ""){
                return "Email address must be entered"
            } 
            return true
        }
    },
    {
        type: 'input',
        message: 'What is the projects GitHub repository name?',
        name: 'repo',
        validate: function (input) {
            if (input === ""){
                return "GitHub Repo Name must be entered"
            } 
            return true
        }
    },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
      validate: function (input) {
        if (input === ""){
            return "Title must be entered"
        } 
        return true
    }
    },
    {
      type: 'input',
      message: 'Please enter a describtion of the project:',
      name: 'description',
      validate: function (input) {
        if (input === ""){
            return "Describtion must be entered"
        } 
        return true
    }
    },
    {
      type: 'input',
      message: 'Enter installation instructions(Please separate each step by a comma and space (, )',
      name: 'installation',
      validate: function (input) {
        if (input === ""){
            return "Installation Instructions must be entered"
        } 
        return true
    }
    },
    {
        type: 'input',
        message: 'Enter Usage Information for the project: ',
        name: 'usage',
        validate: function (input) {
            if (input === ""){
                return "Usage Information must be entered"
            } 
            return true
        }
    },
    {
        type: 'input',
        message: 'Enter Contribution Guidelines for the project',
        name: 'contribution',
        validate: function (input) {
            if (input === ""){
                return "Contribution Guidelines must be entered"
            } 
            return true
        }
    },
    {
        type: 'input',
        message: 'Enter Test Intrsuctions of the project',
        name: 'test',
        validate: function (input) {
            if (input === ""){
                return "Test instructions must be entered"
            } 
            return true
        }
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



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderFetch (data) {

    const licenseKind = data.license;

    fetch(`https://api.github.com/licenses/${licenseKind}`)
   .then(res => res.json())
   .then(output => {
            const licUrl = output.html_url
            const licDes = output.description
            
           
            if (licUrl === "" && licDes === ""){
                writeToFile("./Demo/DEMOREADME.md", generateMarkdown(data, "", ""))
                return ""
            } else {
                writeToFile("./Demo/DEMOREADME.md", generateMarkdown(data, licUrl, licDes))
            } return licUrl, licDes
        })
        .catch((err) => {
            console.log(err);
  })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        renderFetch(data)
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
