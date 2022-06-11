import { isBoardValid, isComplete } from "./rules";
import { solve } from "./breadthFirstSearch";

test("solve finds a solution", () => {
  const solution = solve();
  expect(solution).toBeDefined();
  expect(isBoardValid(solution)).toBe(true);
  expect(isComplete(solution)).toBe(true);
});
