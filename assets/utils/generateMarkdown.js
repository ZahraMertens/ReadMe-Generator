// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const Choices = require('inquirer/lib/objects/choices');
const fetch = require('node-fetch');


function renderLicenseBadge(data) {

  const licenseType = data.license;
  console.log(licenseType)
  
  switch (licenseType){
    case "mit": 
      if (licenseType === "mit") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    case "agpl-3.0": 
      if (licenseType === "agpl-3.0") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }
    case "gpl-3.0": 
      if (licenseType === "gpl-3.0") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    case "mpl-2.0": 
      if (licenseType === "mpl-2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    case "lgpl-3.0": 
      if (licenseType === "lgpl-3.0") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }
    case "apache-2.0": 
      if (licenseType === "apache-2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/*function renderLicenseLink(data) {
}*/

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/*function renderLicenseSection(data) {
  
}*/
function splitInstallation(data){
  console.log(data.installation)

  const splitString = data.installation.split(", ")
  console.log(splitString)
 
  var test = ""

  splitString.forEach(function(value){
    test += `<br/> * ${value} `
  })

  return test.trim()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licUrl, licDes) {

  var licenseBadge = renderLicenseBadge(data); 
  var splitInstall = splitInstallation(data);
  console.log(splitInstall)

  return `

# ${data.title}

${licenseBadge}

## ➡️ Description

${data.description}


## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## ➡️ Installation
The following necessary dependencies must be installed to run the application properly: 
${splitInstall}

## ➡️ Usage
​This application is used for ${data.usage}

## ➡️ Contributing
​Contributors: ${data.contribution}

## ➡️ Tests
To run tests, you need to run the following command: ${data.test}

## ➡️ License

${licDes}
[See Details about the ${data.license}-License](${licUrl})

## Questions

Please contact me for further Questions:

* [🐈‍ GitHub Profile: ](https://github.com/${data.username})
* [✉️ Click here to contact me via Email](mailto:${data.email})
 
`;
}

module.exports = generateMarkdown;
