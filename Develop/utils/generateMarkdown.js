// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
  
  /*![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  let licenseString = '';
  if (licenseType === 'APACHE'){
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (licenseType === 'GNU'){
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (licenseType === 'IBM'){
    licenseString = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (licenseType === 'MIT'){
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  return licenseString*/
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/*function renderLicenseLink(data) {

  const licenseKind = data.license;
  console.log(licenseKind)

  fetch(`https://api.github.com/licenses/${licenseKind}`)
   .then(res => res.json())
   .then(data => {
            console.log(data);
            const licUrl = data.html_url
            console.log(licUrl)
            return licUrl
        })
        .catch((err) => {
            console.log(err);
  })
    
}*/

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/*function renderLicenseSection(data) {
  
 // const licenseLink = data.html_url;
 // const licenseDes = data.licDescription;
 // return licenseLink, licenseDes
}*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licUrl, licDes) {

  var licenseBadge = renderLicenseBadge(data);

  return `

### ${data.title}

${licenseBadge}

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.username}/${data.title})

## Description

${data.description}


## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

##  Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}

## Usage
​This application is used for ${data.usage}

## License
This project is license under the ${data.license} license.

## Contributing
​Contributors: ${data.contribution}

## Tests
To run tests, you need to run the following command: ${data.test}

## License

${licUrl}

${licDes}


## Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly ${data.erfmail}.
 
`;
}

module.exports = generateMarkdown;
