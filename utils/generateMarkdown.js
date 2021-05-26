function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed by ${license}.`
    )
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Dependencies](#dependencies)

* [Usage](#usage)

${renderLink(data.license)}

* [Contributors](#contributors)

* [Test](#test)

* [Questions](#questions)

## Dependencies

To install dependencies, run these commands:

\`\`\`
${data.dependencies}
\`\`\`

## Usage

${data.usage}

${renderSection(data.License)}

## Contributors

${data.contributors}
${data.email}
[${data.github}](https://github.com/${data.github}/)

## Tests

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`


`;
}

module.exports = generateMarkdown;
