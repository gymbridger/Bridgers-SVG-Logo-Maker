const fs = require("fs");
const { Circle, Triangle, Square, Text } = require("./shapes");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "What text should the logo have? (Max: 3 Characters)",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "What color should the text be?",
      default: "black",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape should the logo be?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "color",
      message: "What color should the shape be?",
      default: "black",
    },
  ])

  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
    shape.setColor(answers.color);

    const text = new Text();
    text.setText(answers.text);
    text.setColor(answers.textColor);

    const svgDoc = `
    <svg xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${text.render()}
    </svg>
`;

    fs.writeFileSync("logo.svg", svgDoc);
    console.log("generated SVG");
  });
