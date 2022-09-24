const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License](https://img.shields.io/apm/l/m)'
  } else if (license === 'Apache'){
    badge = '![License](https://img.shields.io/badge/License-Apache-green)'
  } else if (license === 'GNU'){
    badge = '![License](https://img.shields.io/badge/License-GNU-green)'
  } else if (license === 'N/A'){
    badge = ''
  };
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache'){
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
    }else if (license === 'GNU'){
      licenseLink = 'https://www.gnu.org/licenses/licenses.en.html'
    }else if (license === 'N/A'){
      licenseLink = ''
    };
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'N/A') {
    licenseSection = ''
  }else {
    licenseSection =
      `License: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return`
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)}${renderLicenseBadge(answer.license)} 
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### * [License](#license)
  ### * [Description](#description)
  ### * [Installation](#install)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Testing](#testing)
  ### * [Quetions](#questions)

  ## Description
  ### ${answer.description}

  ## Installation:
  ### Please follow these steps to install:
  ### ${answer.install}

  ## Usage:
  ### ${answer.usage}

  ## Contributors: 
  ### ${answer.contributors}

  ## Testing:
  ### Please follow these steps to test the project:
  ### ${answer.testing}

  ## Questions: 
  ### If you have any questions or suggestions, please contact me through either
  ### GitHub: https://github.com/${answer.github}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
