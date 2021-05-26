const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [

  {
    type: "input",
    name: "github",
    message: "What's your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What's your email?"
  },
  {
    type: "input",
    name: "title",
    message: "What's the name of your project?"
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
  },
  {
    type: "input",
    name: "dependencies",
    message: "Any dependencies to install?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to start tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this repo?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?",
  }

];


// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
      .then((inquirerAnswers) => {
          console.log("Generating....");
          writeToFile("README.md", generateMarkdown({ ...inquirerAnswers }));
      })

}

// function call to initialize program
init();
