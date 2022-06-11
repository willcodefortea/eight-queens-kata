import { Board, isBoardValid, isComplete } from "./rules";
import { nextStates } from "./tree";

export const solve = (): Board | undefined => {
  const initialBoard: Board = [0, 0, 0, 0, 0, 0, 0, 0];

  const dfs = (board: Board): Board | undefined => {
    if (isComplete(board)) return board;

    return nextStates(board)
      .filter(isBoardValid)
      .reduce((solution, state) => solution || dfs(state), undefined);
  };

  return dfs(initialBoard);
};
