import { isBoardValid, isComplete } from ".";
import { solve } from "./depthFirstSearch";

test("solve finds a solution", () => {
  const solution = solve();
  expect(solution).toBeDefined();
  expect(isBoardValid(solution)).toBe(true);
  expect(isComplete(solution)).toBe(true);
});
