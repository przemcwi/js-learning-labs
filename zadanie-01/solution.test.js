const countOccurrences = require("./solution");

test("liczy wystąpienia stringów", () => {
  expect(countOccurrences(["a", "b", "a"])).toEqual({ a: 2, b: 1 });
});

test("obsługuje pustą tablicę", () => {
  expect(countOccurrences([])).toEqual({});
});

test("liczy liczby", () => {
  expect(countOccurrences([1, 2, 2, 3, 3, 3])).toEqual({ 1: 1, 2: 2, 3: 3 });
});
