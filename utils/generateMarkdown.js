
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return`
  # <u>${questions.title}</u>

  ${renderLicenseBadge(questions.license)} 
  

  ## <u>Table of Contents:</u>
  ### ${renderLicenseLink(questions.license)}
  ### * [Description](#description)
  ### * [Installation](#install)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Testing](#testing)
  ### * [Questions](#questions)

  ${renderLicenseSection(questions.license)}
  ### ${questions.license}

  ## <u>Description</u>
  ### ${questions.description}

  ## <u>Installation:</u>
  ### Please follow these steps to install:
  ### ${questions.install}

  ## <u>Usage:</u>
  ### ${questions.usage}

  ## <u>Contributors:</u> 
  ### ${questions.contributors}

  ## <u>Testing:</u>
  ### Please follow these steps to test the project:
  ### ${questions.testing}

  ## <u>Questions:</u> 
  ### If you have any questions or suggestions, please contact me through either
  ### GitHub: https://github.com/${questions.github}
  ### or
  ### Email: ${questions.email}
`;
}

module.exports = generateMarkdown;
