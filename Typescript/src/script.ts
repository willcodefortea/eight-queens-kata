import { printBoard, solvers } from ".";

const main = () => {
  let result;
  if (process.argv[2] === "dfs") result = solvers.dfs();
  if (process.argv[2] === "bfs") result = solvers.bfs();

  printBoard(result);
};

main();
