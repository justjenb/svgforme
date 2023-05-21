const Triangle = require("../lib/triangle");

describe("Triangle", () => {
  describe("Instantiate", () => {
    it("should be an instance of Triangle class", () => {
      const triangle = new Triangle('JMB', '#000000', '#FFFFFF');
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("Setting color of SVG", () => {
    it("should set color of SVG to blue", () => {
      const shapeColor = "blue";
      const triangle = new Triangle('JMB', '#000000', '#FFFFFF');
      triangle.setColor(shapeColor);
      expect(triangle.render()).toContain(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});