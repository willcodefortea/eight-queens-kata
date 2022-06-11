import { Board, isBoardValid, isComplete } from ".";

const nextStates = (board: Board) => {
  const states: Board[] = [];

  for (let idx = 0; idx < board.length; idx++) {
    const row = board[idx];
    if (row !== 0) continue;
    for (let i = 0; i < 8; i++) {
      const newBoard: Board = [...board];
      newBoard[idx] = Math.pow(2, i);
      states.push(newBoard);
    }
    break;
  }

  return states;
};

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
