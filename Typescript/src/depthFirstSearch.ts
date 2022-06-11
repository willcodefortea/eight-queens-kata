import { Board } from ".";

export const nextStates = (board: Board) => {
  const states: Board[] = [];

  board.forEach((row, idx) => {
    if (states.length != 0) return;
    const isEmpty = row === 0;
    if (isEmpty) {
      for (let i = 0; i < 8; i++) {
        const newBoard: Board = [...board];
        newBoard[idx] = Math.pow(2, i);
        states.push(newBoard);
      }
    }
  });

  return states;
};
