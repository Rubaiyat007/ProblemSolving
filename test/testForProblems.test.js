const triangleChecker = require("../src/problemWithSolutions");

test("every sides same to be equilateral.", () => {
  expect(triangleChecker(1, 1, 1)).toBe("equilateral");
});
test("two sides same to be isosceles,.", () => {
  expect(triangleChecker(2, 2, 1)).toBe("isosceles");
});
test("every sides same to be scalene", () => {
  expect(triangleChecker(1, 2, 3)).toBe("scalene");
});
test("every sides same to be scalene", () => {
  expect(triangleChecker(0, -6, 1)).toBe("Input is invalid");
});
