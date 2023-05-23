const inquirer = require("inquirer");
const fs = require("fs");
console.log("This is an SVG Logo Maker.");
console.log("Please answer the following questions to generate your desired SVG logo.");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for the logo text:",
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter a maximum of 3 characters.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color keyword or hexadecimal value for the text color:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for the logo: (Enter key to select)",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword or hexadecimal value for the shape color:",
  },
]);
