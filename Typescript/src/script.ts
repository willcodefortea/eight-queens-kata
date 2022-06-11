import { printBoard } from ".";
import { solve as solveDfs } from "./depthFirstSearch";
import { solve as solveBfs } from "./breadthFirstSearch";

const main = () => {
  let result;
  if (process.argv[2] === "dfs") result = solveDfs();
  if (process.argv[2] === "bfs") result = solveDfs();

  printBoard(result);
};

main();
