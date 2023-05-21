class Shapes {
  constructor(text, textColor, shapeColor) {
    if (!text || text.length !== 3) {
      throw new Error("`text` must contain 3 characters.");
    }
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  setColor() {
    throw new Error("Child class must implement setColor() method.");
  }
  render() {
    throw new Error("Child class must implement render() method.");
  }
}

module.exports = Shapes;
