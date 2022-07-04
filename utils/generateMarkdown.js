// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes('MIT')) {
    return '![MIT License](https://img.shields.io/badge/License-MIT-red)';
  } else if (license.includes('Apache')) {
    return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-yellow)';
  } else if (license.includes('Mozilla')) {
    return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-yellowgreen)';
  } else if (license.includes('GNU')) {
    return '![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20v3.0-blue)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes('MIT')) {
    return '[MIT License](https://choosealicense.com/licenses/mit/)';
  } else if (license.includes('Apache')) {
    return '[Apache 2.0 License](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license.includes('Mozilla')) {
    return '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
  } else if (license.includes('GNU')) {
    return '[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license.includes('No License used.')) {
    return `# License
    
  Licensed under the `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license); // calls the function inside the generateMarkdown function to return a const

  const link = renderLicenseLink(data.license); // calls the function inside the generateMarkdown function to return a const

  const section = renderLicenseSection(data.license); // calls the function inside the generateMarkdown function to return a const

  if (section === '') {
    licenseShortcut = '';
  } else {
    licenseShortcut = '- [License](#license)';
  }

  return `# ${data.title}

  ${badge}

  # Description
  
  ${data.description}

  # Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseShortcut}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation
  
  ${data.install}

  # Usage
  
  ${data.usage}
  
  ${section}${link}

  # Contributing
  
  ${data.contribute}

  # Tests
  
  ${data.test}

  # Questions
  
  You can find my GitHub profile at: https://github.com/${data.username}

  If you have any questions, you can contact me by email: ${data.email}

`;
}

module.exports = { generateMarkdown }; 
// exporting 
