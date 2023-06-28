class Shape {
  constructor() {
    this.color = "black";
  }
  setColor(color) {
    this.color = color;
  }
}

class Text extends Shape {
  constructor() {
    super();
    this.text = "";
  }
  setText(text) {
    this.text = text;
  }
  render() {
    return `<text x="50" y="50" fill="${this.color}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x=25 y=25 width=50 height=50 fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Text };
