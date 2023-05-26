const Circle = require("../lib/circle");
const Triangle = require("../lib/triangle")
const Square = require("../lib/square");

describe("Shapes", () => {
  describe("Instantiate Circle", () => {
    it("should be an instance of Circle class", () => {
      const circle = new Circle("JMB", "#000000", "#FFFFFF");
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe("Instantiate Triangle", () => {
    it("should be an instance of Triangle class", () => {
      const triangle = new Triangle("JMB", "#000000", "#FFFFFF");
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("Instantiate Square", () => {
    it("should be an instance of Square class", () => {
      const square = new Square("JMB", "#000000", "#FFFFFF");
      expect(square).toBeInstanceOf(Square);
    });
  });

  describe("Setting color of Circle SVG", () => {
    it("should set color of Circle SVG to purple", () => {
      const shapeColor = "purple";
      const circle = new Circle("JMB", "#000000", "#FFFFFF");
      circle.setColor(shapeColor);
      expect(circle.render()).toContain(
        '<circle cx="150" cy="105" r="80" fill="purple" />'
      );
    });
  });

  describe("Setting color of Triangle SVG", () => {
    it("should set color of Triangle SVG to blue", () => {
      const shapeColor = "blue";
      const triangle = new Triangle("JMB", "#000000", "#FFFFFF");
      triangle.setColor(shapeColor);
      expect(triangle.render()).toContain(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Setting color of Square SVG", () => {
    it("should set color of Square SVG to red", () => {
      const shapeColor = "red";
      const square = new Square("JMB", "#000000", "#FFFFFF");
      square.setColor(shapeColor);
      expect(square.render()).toContain(
        '<rect  x="75" y="30" width="150" height="150" fill="red" />'
      );
    });
  });

  describe("Setting text of Circle SVG to be more than 3 characters", () => {
    it("should set text of Circle SVG to four", () => {
      const text = "four";
      const circle = new Circle("JMB", "#000000", "#FFFFFF");
      circle.setText(text);
      expect(circle.render()).toContain(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#000000">four</text>'
      );
    });
  });
  
});
