# Readme-Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## General Information

* [🎥 Walkthrough Video of Application with Google Drive](https://drive.google.com/file/d/1vDet_3Nh2rUZ0YIXSnSGSVgD4Foaixjs/view?usp=sharing)
* [🐱 URL of the GitHub Repo](https://github.com/ZahraMertens/ReadMe-Generator.git)


## Table if Contents
1. [General Information](#general-informaion)
2. [Task Description](#task-description)
3. [Installation Instructions](#installation-instructions)
3. [Technologies Used](#technologies-used)
4. [Mock-Up](#mock-up)
5. [Bonus](#bonus)
6. [Credits](#credits)


## Task Describtion

The Application allows the user to generate a personalized README file which is based on the structure of a GOOD and professional markdown, so the user can safe time on writing text and is able to use the won time to improve the code. The user clone the repository and by simply answering prompts in the terminal, a polished README.md will be the outcome.

## Installation Instrctions

* 1️⃣ First the user must clone the [GitHub Repo](https://github.com/ZahraMertens/ReadMe-Generator.git) on its computer.

* 2️⃣ Open the repository on your device with VS Code (or any other program)

* 3️⃣ Open the command line at the folder location OR the integrated terminal 

* 4️⃣ First, you MUST install the npm packages by running "npm install" in the terminal

* 5️⃣ Then run "node index" in the terminal

* 6️⃣ Answer all questions in order to generate your personalized DEMOREADME.md 

* 7️⃣ When all questions are answered you will see the generated file in the Demo folder

**Note** ❗ Make sure that your GitHub username, repository and email are spelled correct in order to make sure that all URLs are working ❗

## Technologies Used

* JavaScript

* NodeJS 

* Npm packages: Node-fetch & inquirer

## Actual Behaviour

* WHEN I am prompted for information about my application project THEN a high-quality, professional README.md is generated with the title and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

* WHEN I enter my project title THEN this is displayed as the title of the README

* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

* WHEN I choose a license for my application from a list of options THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

* WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

* WHEN I enter my email address THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

* WHEN I click on the links in the Table of Contents THEN I am taken to the corresponding section of the README


## 🏆 Bonus


* WHEN I choose the license for my project than a fetch is executed to get the detailed description of the license and a link to get more information

* WHEN I enter the installation instructions devided by a comma then a list is getting created

## Mock-Up

🎥 The video shows the usage of the code in the terminal to generate a new Readme File:

![Code-Demo](./assets/Images/code.gif)

🎥 The video shows an example of a Readme file generated with the node.js application and its features:

![Deployed-Readme-Demo](./assets/Images/demopage.gif)

## Credits

* https://www.npmjs.com/package/inquirer
* https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
* https://www.npmjs.com/package/node-fetch
* https://github.com/node-fetch/node-fetch


