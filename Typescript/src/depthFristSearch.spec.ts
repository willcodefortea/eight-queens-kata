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
