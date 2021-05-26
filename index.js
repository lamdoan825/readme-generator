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
