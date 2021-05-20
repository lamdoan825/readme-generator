const inquirer = require('inquirer')
// const generatePage = require('');
// const { writeFile, copyFile } = require('');

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
}

// function to initialize program
function init() {
}
// function call to initialize program
init();