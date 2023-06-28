const { Circle, Triangle, Square, Text } = require("./shapes");

test("Check render of circle", () => {
  const circle = new Circle();
  circle.setColor("blue");
  expect(circle.render()).toEqual(
    '<circle cx="50" cy="50" r="40" fill="blue" />'
  );
});

test("Check render of triangle", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual(
    `<polygon points="50,15 100,100 0,100" fill="blue" />`
  );
});

test("Check render of square", () => {
  const square = new Square();
  square.setColor("blue");
  expect(square.render()).toEqual(
    `<rect x=25 y=25 width=50 height=50 fill="blue" />`
  );
});
