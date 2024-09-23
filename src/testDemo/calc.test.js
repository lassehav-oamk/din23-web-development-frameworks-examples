import { expect, test } from "vitest";
import { sum, calculateAverage, calculateMedian } from "./calc";

test("Sum with positive numbers of 1 and 2", () => {
  expect(sum(1, 2)).toBe(3);
});
