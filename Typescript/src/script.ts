import { printBoard } from ".";
import { solve as solveDfs } from "./depthFirstSearch";

const main = () => {
  let result;
  if (process.argv[2] === "dfs") result = solveDfs();

  printBoard(result);
};

main();
