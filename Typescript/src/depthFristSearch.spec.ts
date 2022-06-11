import { nextStates } from "./depthFirstSearch";

test("nextStates finds all next states to explore", () => {
  expect(nextStates([0, 0, 0, 0, 0, 0, 0, 0])).toEqual([
    [1, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0],
    [16, 0, 0, 0, 0, 0, 0, 0],
    [32, 0, 0, 0, 0, 0, 0, 0],
    [64, 0, 0, 0, 0, 0, 0, 0],
    [128, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("when given a non-empty state, nextStates provides all next starting locations", () => {
  expect(nextStates([1, 0, 0, 0, 0, 0, 0, 0])).toEqual([
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 2, 0, 0, 0, 0, 0, 0],
    [1, 4, 0, 0, 0, 0, 0, 0],
    [1, 8, 0, 0, 0, 0, 0, 0],
    [1, 16, 0, 0, 0, 0, 0, 0],
    [1, 32, 0, 0, 0, 0, 0, 0],
    [1, 64, 0, 0, 0, 0, 0, 0],
    [1, 128, 0, 0, 0, 0, 0, 0],
  ]);
});
