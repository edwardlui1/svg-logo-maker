// Importing necessary dependencies and modules
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// Function to generate SVG logo
function generateLogo({ text, textColor, shape, shapeColor }) {
  const shapeSVG = getShape(shape, shapeColor);
  const textSVG = `<text x="150" y="120" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  ${textSVG}
</svg>`; 
};

// Function to get shape type and color
function getShape(shape, color) {
  let logoShape;

  switch (shape) {
    case 'circle':
      logoShape = new Circle();
      break;
    case 'triangle':
      logoShape = new Triangle();
      break;
    case 'square':
      logoShape = new Square();
      break;
    default:
      return 'Invalid Shape';
  }
  logoShape.setColor(color);
  return logoShape.render();
};

// Questions to prompt user
const questions = [
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
    message: "Choose a shape for the logo: (Use the `Enter` key to select)",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color keyword or hexadecimal value for the shape color:",
  },
];

// Using inquirer to prompt user 
inquirer.prompt(questions).then(async (response) => {
  const svgLogo = generateLogo(response);
  // Takes generated logo and writes to new file
  try {
    await fs.promises.writeFile('logo.svg', svgLogo);
    console.log('Generated SVG Logo');
  } catch (err) {
    console.error(err);
  }
});
