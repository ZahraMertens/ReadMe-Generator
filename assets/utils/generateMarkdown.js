// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//Render license badge depending on license type
function renderLicenseBadge(data) {

  const licenseType = data.license;

  //switch statement to return depending on what the license type is
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
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    case "":
      if (licenseType === ""){
        return ""
      }
  }
}

//Create list elements of instructions
function splitInstallation(data){
 
  //Create array of insructions
  const splitString = data.installation.split(", ")
 
  var listItems = "";

  //Loop over array and append each string to empty string
  splitString.forEach(function(value){
    listItems += `* ${value} \n`
  })

  return listItems //return list elements
}

function renderLicenseSection(data, licUrl, licDes) {

  if (licUrl && licDes) {
    return `${licDes}\n[See Details about the ${data.license}-license](${licUrl})`
  } else {
    return "[![License](https://img.shields.io/badge/License-NONE-red.svg)]"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licUrl, licDes) {

  const licenseBadge = renderLicenseBadge(data); 
  const splitInstall = splitInstallation(data);
  const licenseSection = renderLicenseSection(data, licUrl, licDes)

  var trimName = data.username.trim();
  var trimEmail = data.email.trim();
  var trimRepo = data.repo.trim();

  return `
# ➡️ ${data.title}

${licenseBadge}

## ➡️ Description

${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage-information)
* [Contributing](#contribution-guidelines)
* [Tests](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Installation

[🐈‍ GitHub Repository](https://github.com/${trimName}/${trimRepo})

The following necessary dependencies must be installed to run the application properly: 

${splitInstall}

## Usage Information

${data.usage}

## Contribution-Guidelines

${data.contribution}

## Test Instructions
To run tests, you need to run the following command:

${data.test}

## License

${licenseSection}

## Questions

Please contact me for additional questions:

* [🐈‍ GitHub Profile: ](https://github.com/${trimName})
* [✉️ Click here to contact me via Email (${trimEmail})](mailto:${trimEmail})
 
Copyright (c) 2021 ${trimName} Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
