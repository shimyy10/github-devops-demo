const { test } = require("node:test");
const assert = require("node:assert/strict");
const { add, subtract, multiply, divide } = require("../src/calculator");

test("add sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract finds the difference", () => {
  assert.equal(subtract(5, 3), 2);
});

test("multiply computes the product", () => {
  assert.equal(multiply(4, 3), 12);
});

test("divide computes the quotient", () => {
  assert.equal(divide(10, 2), 5);
});

test("divide throws on division by zero", () => {
  assert.throws(() => divide(1, 0), /division by zero/);
});
