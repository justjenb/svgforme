class Shapes {
    constructor(text, textcolor, shapecolor) {

    if (!text || text.length !== 3){
        throw new Error('`text` must contain 3 characters.');
    }

    this.text = text;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;

}
  render() {
    throw new Error('Child class must implement render() method.');
  }

  renderInnerHTML() {
    for(child of children) {
      this.render() = data;
      return data;
    }
  }
}

module.exports = Shapes;