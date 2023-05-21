const inquirer = require("inquirer");
const { readFile, writeFile } = require('fs/promises');
const Circle = require("./circle");
const Triangle = require("./triangle");
const Square = require("./square");

class CLI {
  constructor() {
    this.answers = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "text",
          message: "Please enter up to three letters, numbers or symbols.",
        },
        {
          type: "input",
          name: "textcolor",
          message:
            "What color would you like the text to be? Enter a base color or hex value.",
        },
        {
          type: "list",
          name: "shape",
          message: "What shape would you like?",
          choices: ["circle", "triangle", "square"],
        },
        {
          type: "input",
          name: "shapecolor",
          message:
            "What color would you like the shape to be? Enter a base color or hex value.",
        },
      ])
      .then((answers) => {
        this.answers = answers;
        console.log(answers);
        console.log(answers.shape);
        return answers;
      })
      .then((answers) => {
        console.log(answers);
        console.log(answers.shape);
        if (answers.shape === "circle") {
            const circle = new Circle(
                answers.text,
                answers.textcolor,
                answers.shapecolor
            )
            const svg = circle.render();
            return writeFile('./generated_svg.svg', svg)
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

module.exports = CLI;
