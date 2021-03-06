import { Board } from "./rules";

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
