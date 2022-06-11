import { Board, isBoardValid } from ".";

export const nextStates = (board: Board) => {
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

export const canStop = (board: Board) => {
  return board.reduce((rowsFilled, row) => rowsFilled && row > 0, true);
};

export const solve = (): Board | undefined => {
  const initialBoard: Board = [0, 0, 0, 0, 0, 0, 0, 0];

  const dfs = (board: Board): Board | undefined => {
    if (!isBoardValid(board)) return;

    const states = nextStates(board);
    for (let i = 0; i < states.length; i++) {
      const state = states[i];
      const solution = dfs(state);
      if (solution) {
        return solution;
      }
    }

    if (canStop(board)) return board;
  };

  return dfs(initialBoard);
};
