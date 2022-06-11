export { printBoard } from "./rules";
import { solve as solveDfs } from "./depthFirstSearch";
import { solve as solveBfs } from "./breadthFirstSearch";

export const solvers = {
  dfs: solveBfs,
  bfs: solveDfs,
};
